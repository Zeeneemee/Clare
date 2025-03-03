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

def find_latest_acne_result_folder(base_dir):
    """Find the latest acne result folder."""
    acne_folders = [f for f in os.listdir(base_dir) if f.startswith("acne_result")]
    if not acne_folders:
        return None  
    acne_folders.sort(key=lambda x: int(x.replace("acne_result", "") or 0), reverse=True)
    return os.path.join(base_dir, acne_folders[0])  # Return the latest result folder

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

        # ✅ Validate file existence
        if not os.path.exists(file_path):
            print(json.dumps({"error": f"File not found: {file_path}"}))
            sys.exit(1)

        # ✅ Run acne detection
        results_acne = acne_detection(file_path, base_upload_dir)

        # ✅ Find processed acne result image
        latest_acne_folder = find_latest_acne_result_folder(base_upload_dir)
        processed_image_path = None
        if latest_acne_folder:
            for file in os.listdir(latest_acne_folder):
                if file.endswith(".jpg") or file.endswith(".png"):  # Look for an image
                    processed_image_path = os.path.join(latest_acne_folder, file)
                    break

        encoded_image = encode_image(processed_image_path) if processed_image_path else None

        # ✅ Default Values for Other Features
        default_detection = {
            "ResultImage": '',
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
