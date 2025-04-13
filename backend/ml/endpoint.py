from flask import Flask, request, jsonify
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
from age.age import age_detection
from wrinkle.wrinkle import analyze_wrinkles, UNet
import torch

app = Flask(__name__)

# === Model loading at startup ===
wrinkles_model = UNet()
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model_path = os.path.join(os.path.dirname(__file__), 'wrinkle/wrinkle_model.pth')
wrinkles_model.load_state_dict(torch.load(model_path, map_location=device))
wrinkles_model.eval()  # Put model in inference mode
port = 80
# === Utility Functions ===
def decode_base64_image(base64_string):
    """Decode Base64 image and return a PIL image."""
    image_data = base64.b64decode(base64_string)
    return Image.open(io.BytesIO(image_data)).convert("RGB")

def acne_score(confidences):
    valid = [c for c in confidences if c > 0.1]
    score = (sum(valid) / 7.46) * 10
    return min(score, 10)

# Change the len to the severe image 
def compute_score(confidences):
    valid = [c for c in confidences if c > 0.1]
    return (sum(valid) / len(valid)) * 10 if valid else 0.0

def encode_image_to_base64(image: Image.Image) -> str:
    buffer = io.BytesIO()
    image.save(buffer, format="JPEG")
    return base64.b64encode(buffer.getvalue()).decode("utf-8")

def darkspot_score(confidences):
    valid = [c for c in confidences if c > 0.1]
    score = (sum(valid) / 25.12) * 10
    return min(score, 10)

# === Flask Routes ===
@app.route('/analyze', methods=['POST'])
def analyze_image():
    try:
        data = request.get_json()
        if not data or 'image' not in data:
            return jsonify({"error": "No image data provided."}), 400

        base64_input = data['image']

        # Decode base64 image to PIL image
        image = decode_base64_image(base64_input)

        # Save temporary file for model compatibility
       

        # Run models
        results_acne = acne_detection(image)
        result_gender = Gender(image)
        results_scar = Scar_detection(image)
        undereye_results = Predict_underEye(image)
        darkspot_results = darkspot_detection(image)
        age_results = age_detection(image)
        
        severity_score, wrinkle_percent = analyze_wrinkles(wrinkles_model, image)


        # Prepare and return results
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
                "score": round(darkspot_score(darkspot_results.get("confidence", [])))
            },
            "age": age_results,
            "gender": {
                "label": result_gender
            }
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Run the Flask API on host 0.0.0.0 and port 5000
    app.run(host='0.0.0.0', port=port, debug=True)
    print('running on port',port)
