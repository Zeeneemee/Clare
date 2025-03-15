import base64
import sys
import json
import os
import io
from PIL import Image
from acne.acne import acne_detection  # Import ML model
from gender.gender import Gender  # Import Gender model
from undereye.underEye import Predict_underEye  # Import Under-eye model
from darkspot.darkspot import darkspot_detection 

# ✅ Define directories using relative paths
BASE_UPLOAD_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uploads")
ACNE_RESULT_DIR = os.path.join(BASE_UPLOAD_DIR, "acne_result")
GENDER_RESULT_DIR = os.path.join(BASE_UPLOAD_DIR, "gender_result")
UNDEREYE_RESULT_DIR = os.path.join(BASE_UPLOAD_DIR, "undereye_result")
DARKSPOT_RESULT_DIR = os.path.join(BASE_UPLOAD_DIR, 'darkspot_result',"darkspot_result")

def decode_base64_image(base64_string, output_path):
    """Decodes a Base64-encoded image and saves it as a file."""
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
    return (sum(valid_confidences) / len(valid_confidences)) * 100 if valid_confidences else 0.0

if __name__ == "__main__":
    try:
        # ✅ Ensure valid input argument
        if len(sys.argv) < 2:
            print(json.dumps({"error": "No image data provided"}))
            sys.exit(1)

        input_data = sys.argv[1]  # Could be a file path or a Base64 string

        # ✅ Check if input is a file path or Base64 string
        if os.path.exists(input_data):
            temp_image_path = input_data  # Use file path directly
        else:
            # ✅ Decode Base64 to temporary image file
            temp_image_path = os.path.join(BASE_UPLOAD_DIR, "temp_image.jpg")
            decode_base64_image(input_data, temp_image_path)

        # ✅ Run acne detection
        results_acne = acne_detection(temp_image_path, BASE_UPLOAD_DIR)
        
        # ✅ Run gender detection
        result_gender = Gender(temp_image_path, BASE_UPLOAD_DIR)
        detected_gender = result_gender

        # ✅ Run under-eye detection
        undereye_results = Predict_underEye(temp_image_path, UNDEREYE_RESULT_DIR)
        # Extract under-eye score and result image
        dark_circle_score = undereye_results[0]["dark_circle_score"] if undereye_results else 0.0
        dark_circle_label = undereye_results[0]["label"] if undereye_results else "Not Detected"
        
        # ✅ Run darkspot detection only if no darkspot result file already exists
        if not os.path.exists(DARKSPOT_RESULT_DIR) or not os.listdir(DARKSPOT_RESULT_DIR):
            darkspot_results = darkspot_detection(temp_image_path, DARKSPOT_RESULT_DIR)
        else:
            # Use existing results or set default values
            darkspot_results = {"positions": [], "confidence": []}

        # ✅ Find processed images
        def find_processed_image(directory):
            if os.path.exists(directory):
                for file in os.listdir(directory):
                    if file.endswith(".jpg") or file.endswith(".png"):
                        return os.path.join(directory, file)
            return None

        processed_acne_image_path = find_processed_image(ACNE_RESULT_DIR)
        processed_gender_image_path = find_processed_image(GENDER_RESULT_DIR)
        processed_undereye_image_path = find_processed_image(UNDEREYE_RESULT_DIR)
        processed_darkspot_image_path = find_processed_image(DARKSPOT_RESULT_DIR)

        # ✅ Convert processed images to Base64
        encoded_acne_image = encode_image(processed_acne_image_path) if processed_acne_image_path else None
        encoded_gender_image = encode_image(processed_gender_image_path) if processed_gender_image_path else None
        encoded_undereye_image = encode_image(processed_undereye_image_path) if processed_undereye_image_path else None
        encoded_darkspot_image = encode_image(processed_darkspot_image_path) if processed_darkspot_image_path else None

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
                "ResultImage": f"data:image/jpeg;base64,{encoded_acne_image}" if encoded_acne_image else None,
                "positions": results_acne.get("positions", []),
                "confidence": results_acne.get("confidence", []),
                "score": compute_score(results_acne.get("confidence", []))
            },
            "wrinkles": default_detection,
            "scar": default_detection,
            "undereye": {
                "ResultImage": f"data:image/jpeg;base64,{encoded_undereye_image}" if encoded_undereye_image else None,
                "score": round(dark_circle_score),
                "label": dark_circle_label
            },
            "darkspot": {
                "ResultImage": f"data:image/jpeg;base64,{encoded_darkspot_image}" if encoded_darkspot_image else None,
                "positions": darkspot_results.get("positions", []),
                "confidence": darkspot_results.get("confidence", []),
                "score": compute_score(darkspot_results.get("confidence", []))
            },
            "age": "Not Detected",
            "gender": {
                "label": detected_gender,
                "ResultImage": f"data:image/jpeg;base64,{encoded_gender_image}" if encoded_gender_image else None
            }
        }

        # ✅ Cleanup only if we created a temp file
        if not os.path.exists(input_data) and os.path.exists(temp_image_path):
            os.remove(temp_image_path)

        # ✅ Print JSON output
        sys.stdout.flush()
        print(json.dumps(combined_result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
