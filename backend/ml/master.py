import base64
import sys
import json
import os
from acne.acne import acne_detection  

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
        # ✅ Ensure valid file path argument
        if len(sys.argv) < 2:
            print(json.dumps({"error": "No file path provided"}))
            sys.exit(1)

        file_path = sys.argv[1]
        base_upload_dir = "/Users/tt/Documents/Coding/Claire/backend/uploads/"
        acne_result_dir = os.path.join(base_upload_dir, "acne_result")  # ✅ Always use this fixed folder

        # ✅ Validate file existence
        if not os.path.exists(file_path):
            print(json.dumps({"error": f"File not found: {file_path}"}))
            sys.exit(1)

        # ✅ Run acne detection
        results_acne = acne_detection(file_path, base_upload_dir)

        # ✅ Find processed acne result image
        processed_image_path = None
        if os.path.exists(acne_result_dir):  # ✅ Only check `acne_result`
            for file in os.listdir(acne_result_dir):
                if file.endswith(".jpg") or file.endswith(".png"):  # Look for an image
                    processed_image_path = os.path.join(acne_result_dir, file)
                    break

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

        # ✅ Ensure only JSON is printed
        sys.stdout.flush()
        print(json.dumps(combined_result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
