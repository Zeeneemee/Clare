import sys
import base64
import json
import os
import io
import uuid
from PIL import Image

# ML imports
from acne.acne import acne_detection
from gender.gender import Gender
from undereye.underEye import Predict_underEye
from darkspot.darkspot import darkspot_detection
from scar.scar import Scar_detection
from wrinkle.wrinkle import analyze_wrinkles, UNet
import torch

# === Model loading at startup ===
wrinkles_model = UNet()
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model_path = os.path.join(os.path.dirname(__file__), 'wrinkle/wrinkle_model.pth')
wrinkles_model.load_state_dict(torch.load(model_path, map_location=device))
wrinkles_model.eval()  # Put model in inference mode

# === Utility Functions ===
def decode_base64_image(base64_string):
    """Decode Base64 image and return PIL image."""
    image_data = base64.b64decode(base64_string)
    return Image.open(io.BytesIO(image_data)).convert("RGB")

def acne_score(confidences):
    valid = [c for c in confidences if c > 0.1]
    score = (sum(valid) / 7.46) * 10
    return min(score, 10)

def compute_score(confidences):
    valid = [c for c in confidences if c > 0.1]
    return (sum(valid) / len(valid)) * 10 if valid else 0.0

def encode_image_to_base64(image: Image.Image) -> str:
    buffer = io.BytesIO()
    image.save(buffer, format="JPEG")
    return base64.b64encode(buffer.getvalue()).decode("utf-8")

# === Main execution ===
def main():
    try:
        # Read base64 input from stdin
        base64_input = sys.stdin.read().strip()
        if not base64_input:
            raise ValueError("No base64 input received.")

        # Decode base64 to PIL Image
        image = decode_base64_image(base64_input)

        # Save temp file if needed for model compatibility
        unique_filename = f"{uuid.uuid4().hex}.jpg"
        temp_path = os.path.join("/tmp", unique_filename)
        image.save(temp_path)

        # Run models (using saved path if needed)
        results_acne = acne_detection(temp_path)
        result_gender = Gender(temp_path)
        results_scar = Scar_detection(temp_path)
        undereye_results = Predict_underEye(temp_path)
        darkspot_results = darkspot_detection(temp_path)

        severity_score, wrinkle_percent = analyze_wrinkles(wrinkles_model, temp_path)

        # Clean up (optional)
        if os.path.exists(temp_path):
            os.remove(temp_path)

        # Prepare result
        result = {
            "processedImage": f"data:image/jpeg;base64,{encode_image_to_base64(image)}",
            "acne": {
                "positions": results_acne.get("positions", []),
                "confidence": results_acne.get("confidence", []),
                "score": round(acne_score(results_acne.get("confidence", [])))
            },
            "wrinkles": {
                "severity": severity_score,
                "percentage": wrinkle_percent
            },
            "scar": {
                "positions": results_scar.get("positions", []),
                "confidence": results_scar.get("confidence", []),
                "score": round(compute_score(results_scar.get("confidence", [])))
            },
            "undereye": {
                "score": round(undereye_results[0]["dark_circle_score"]) if undereye_results else 0.0,
                "label": undereye_results[0]["label"] if undereye_results else "Not Detected"
            },
            "darkspot": {
                "positions": darkspot_results.get("positions", []),
                "confidence": darkspot_results.get("confidence", []),
                "score": round(compute_score(darkspot_results.get("confidence", [])))
            },
            "age": "Not Detected",
            "gender": {
                "label": result_gender
            }
        }

        print(json.dumps(result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    main()
