import base64
import sys
import json
import os
import io
from PIL import Image
from acne.acne import acne_detection  # Import ML model

# ✅ Define the upload directory & results folder
BASE_UPLOAD_DIR = "/Users/tt/Documents/Coding/Claire/backend/uploads/"
ACNE_RESULT_DIR = os.path.join(BASE_UPLOAD_DIR, "acne_result")

def decode_base64_image(base64_string, output_path):
    """Decodes a Base64-encoded image and saves it as a temporary file."""
    image_data = base64.b64decode(base64_string)
    image = Image.open(io.BytesIO(image_data))
    image.save(output_path, format="JPEG")  # ✅ Ensure JPEG format
    return output_path

def encode_image(file_path):
    """Convert an image to Base64 for frontend display."""
    if not os.path.exists(file_path):
        return None
    with open(file_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

def compute_score(confidences):
    """Compute the average confidence score safely."""
    valid_confidences = [c for c in confidences if c > 0.1]
    return sum(valid_confidences) / len(valid_confidences) if valid_confidences else 0.0

if __name__ == "__main__":
    try:
        # ✅ Ensure valid input argument
        if len(sys.argv) < 2:
            print(json.dumps({"error": "No image data provided"}))
            sys.exit(1)

        base64_image = sys.argv[1]
        temp_image_path = os.path.join(BASE_UPLOAD_DIR, "temp_image.jpg")  # ✅ Temporary image file

        # ✅ Decode and save Base64 image
        decode_base64_image(base64_image, temp_image_path)

        # ✅ Run acne detection
        results_acne = acne_detection(temp_image_path, BASE_UPLOAD_DIR)

        # ✅ Find processed acne result image
        processed_image_path = None
        if os.path.exists(ACNE_RESULT_DIR):
            for file in os.listdir(ACNE_RESULT_DIR):
                if file.endswith(".jpg") or file.endswith(".png"):  # ✅ Get first image
                    processed_image_path = os.path.join(ACNE_RESULT_DIR, file)
                    break

        # ✅ Convert processed image to Base64 (if found)
        encoded_image = encode_image(processed_image_path) if processed_image_path else None

        # ✅ Default Values for Other Features
        default_detection = {
            "ResultImage": None,
            "positions": [],
            "confidence": [],
            "score": 0.0
        }

        # ✅ Construct JSON output
        combined_result = {
            "acne": {
                "ResultImage": f"data:image/jpeg;base64,{encoded_image}" if encoded_image else None,
                "positions": results_acne.get("positions", []),
                "confidence": results_acne.get("confidence", []),
                "score": compute_score(results_acne.get("confidence", []))
            },
            "wrinkles": default_detection,
            "scar": default_detection,
            "undereye": default_detection,
            "darkspot": default_detection,
            "age": "Not Detected",
            "gender": "Not Detected"
        }

        # ✅ Cleanup temporary image file
        if os.path.exists(temp_image_path):
            os.remove(temp_image_path)

        # ✅ Print JSON output (ensuring it's the only output)
        sys.stdout.flush()
        print(json.dumps(combined_result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
