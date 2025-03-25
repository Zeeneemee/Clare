import base64
import sys
import json
import os
import io
from PIL import Image
import uuid
from acne.acne import acne_detection  # Import ML model
from gender.gender import Gender        # Import Gender model
from undereye.underEye import Predict_underEye  # Import Under-eye model
from darkspot.darkspot import darkspot_detection  # Import Darkspot model
from scar.scar import Scar_detection
from wrinkle.wrinkle import analyze_wrinkles, UNet
import torch

# ✅ Define directories using relative paths
BASE_UPLOAD_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uploads")
def decode_base64_image(base64_string, output_path):
    """Decodes a Base64-encoded image and saves it as a file."""
    image_data = base64.b64decode(base64_string)
    image = Image.open(io.BytesIO(image_data))
    image.save(output_path, format="JPEG")  # Ensure JPEG format
    return output_path

def acne_score(confidences: list) -> list:
    valid_confidences = [c for c in confidences if c > 0.1]
    score = (sum(valid_confidences)/7.46) * 10
    if score > 10: 
        return 10
    return score

def encode_image(file_path):
    """Convert an image to Base64 for frontend display."""
    if not os.path.exists(file_path):
        return None
    with open(file_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

def compute_score(confidences):
    """Compute the average confidence score safely."""
    valid_confidences = [c for c in confidences if c > 0.1]
    return (sum(valid_confidences) / len(valid_confidences)) * 10 if valid_confidences else 0.0

if __name__ == "__main__":
    try:
        # ✅ Ensure valid input argument
        if len(sys.argv) < 2:
            print(json.dumps({"error": "No image data provided"}))
            sys.exit(1)

        input_data = sys.argv[1]  # Could be a file path or a Base64 string
        
        # ✅ Save the original image with a unique name
        unique_filename = f"{uuid.uuid4().hex}.jpg"
        original_image_path = os.path.join(BASE_UPLOAD_DIR, unique_filename)
        
        if os.path.exists(input_data):
            # Input is a file path; copy it to our storage directory.
            with open(input_data, "rb") as src_file:
                with open(original_image_path, "wb") as dst_file:
                    dst_file.write(src_file.read())
        else:
            # Input is a Base64 string; decode and save it.
            decode_base64_image(input_data, original_image_path)
        
        # ✅ Run predictions on the original image without storing processed images.
        # We pass None as the directory so the models return results only.
        results_acne = acne_detection(original_image_path)
        result_gender = Gender(original_image_path)
        detected_gender = result_gender
        results_scar = Scar_detection(original_image_path)

        undereye_results = Predict_underEye(original_image_path)
        dark_circle_score = undereye_results[0]["dark_circle_score"] if undereye_results else 0.0
        dark_circle_label = undereye_results[0]["label"] if undereye_results else "Not Detected"
        darkspot_results = darkspot_detection(original_image_path)
        wrinkles_model = UNet() 
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        model_path = os.path.join(os.path.dirname(__file__), 'wrinkle/wrinkle_model.pth')
        state_dict = torch.load(model_path, map_location=device)
        wrinkles_model.load_state_dict(state_dict)
        severity_score, wrinkle_percent = analyze_wrinkles(wrinkles_model, original_image_path)
        encoded_original_image = encode_image(original_image_path)
        # ✅ Default detection for features not implemented.
        default_detection = {
            "positions": [],
            "confidence": [],
            "score": 0.0
        }
        
        # ✅ Construct JSON output containing only analysis results (bounding box positions, etc.)
        combined_result = {
            "originalImage": f"data:image/jpeg;base64,{encoded_original_image}" if encoded_original_image else None,
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
                "score": round(dark_circle_score),
                "label": dark_circle_label
            },
            "darkspot": {
                "positions": darkspot_results.get("positions", []),
                "confidence": darkspot_results.get("confidence", []),
                "score": round(compute_score(darkspot_results.get("confidence", [])))
            },
            "age": "Not Detected",
            "gender": {
                "label": detected_gender
            }
        }

        # ✅ Print JSON output.
        sys.stdout.flush()
        print(json.dumps(combined_result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)