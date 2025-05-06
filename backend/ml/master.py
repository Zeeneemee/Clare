import sys
import base64
import json
import io
from PIL import Image
import torch

# ML imports
from acne.acne import acne_detection
from gender.gender import Gender
# from undereye.underEye import Predict_underEye
from darkspot.darkspot import darkspot_detection
from scar.scar import Scar_detection
# from age.age import age_detection
# from wrinkle.wrinkle import analyze_wrinkles, UNet

# === Model loading at startup ===
# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# wrinkles_model = UNet().to(device)
# model_path = os.path.join(os.path.dirname(__file__), 'wrinkle/wrinkle_model.pth')
# state_dict = torch.load(model_path, map_location=device)
# wrinkles_model.load_state_dict(state_dict)
# wrinkles_model.eval()  # Set model to eval mode


# === Utility Functions ===
def decode_base64_image(base64_string):
    """Decode Base64 image and return PIL Image."""
    image_data = base64.b64decode(base64_string)
    return Image.open(io.BytesIO(image_data)).convert("RGB")

def encode_image_to_base64(image: Image.Image) -> str:
    """Encode PIL image to Base64 string."""
    buffer = io.BytesIO()
    image.save(buffer, format="JPEG")
    return base64.b64encode(buffer.getvalue()).decode("utf-8")

def acne_score(confidences):
    valid = [c for c in confidences if c > 0.1]
    score = (sum(valid) / 4) * 10
    return min(score, 10)

def scar_score(confidences):
    valid = [c for c in confidences if c >= 0.4]
    if not valid:
        return 0
    conf_average = sum(valid) / len(valid)
    if conf_average > 0.7:
        return 10
    step = (0.75 - 0.4) / 9  # ≈0.0389
    score = int((conf_average - 0.4) / step) + 1
    return max(1, min(score, 9))

def darkspot_score(confidences):
    valid = [c for c in confidences if c > 0.1]
    score = (sum(valid) / 15) * 10
    return min(score, 10)

# === Main execution ===
def main():
    try:
        # Read base64 input from stdin
        base64_input = sys.stdin.read().strip()
        if not base64_input:
            raise ValueError("No base64 input received.")

        # Decode base64 to PIL Image
        image = decode_base64_image(base64_input)

        # Run ML models with PIL Image
        results_acne = acne_detection(image)
        result_gender = Gender(image)
        results_scar = Scar_detection(image)
        # undereye_results = Predict_underEye(image)
        darkspot_results = darkspot_detection(image)
        # age_results = age_detection(image)
        # severity_score, wrinkle_percent = analyze_wrinkles(wrinkles_model, image)

        # Prepare result
        result = {
            "processedImage": f"data:image/jpeg;base64,{encode_image_to_base64(image)}",
            "acne": {
                "positions": results_acne.get("positions", []),
                "confidence": results_acne.get("confidence", []),
                "score": round(acne_score(results_acne.get("confidence", [])))
            },
            "scar": {
                "positions": results_scar.get("positions", []),
                "confidence": results_scar.get("confidence", []),
                "score": scar_score(results_scar.get("confidence", []))
            },
            "darkspot": {
                "positions": darkspot_results.get("positions", []),
                "confidence": darkspot_results.get("confidence", []),
                "score": round(darkspot_score(darkspot_results.get("confidence", [])))
            },
            "age": "Not Detected",  # Placeholder (uncomment if using age model)
            "gender": {
                "label": result_gender
            }
            # "undereye": {
            #     "score": round(undereye_results[0]["dark_circle_score"]) if undereye_results else 0.0,
            #     "label": undereye_results[0]["label"] if undereye_results else "Not Detected"
            # },
            # "wrinkles": {
            #     "score": severity_score,
            #     "percentage": round(wrinkle_percent)
            # }
        }

        print(json.dumps(result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    main()
