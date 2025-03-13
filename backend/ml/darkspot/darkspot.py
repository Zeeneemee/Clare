from ultralytics import YOLO
import os
import shutil  

def darkspot_detection(image_path,save_dir):
    detection_data = {"positions": [], "confidence": []}
    output_dir = os.path.join(save_dir, "darkspot_result")
    model_path = os.path.join(os.path.dirname(__file__), "darkspot.pt")

    # ✅ Remove existing output directory if it exists
    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)  # Delete previous results
    model = YOLO(model_path)
    results = model.predict(image_path, save=True, project=save_dir,name="darkspot_result" , show=True)  # Process the image
    for result in results:
        boxes = result.boxes  
        for box in boxes:
           x_min, y_min, x_max, y_max = box.xyxy[0].tolist()  
           confidence = float(box.conf[0]) 
           detection_data["positions"].append({"x": int(x_min), "y": int(x_max), "width": int(x_min-x_max), "height": int(y_min-y_max)})
           detection_data["confidence"].append(confidence)
    return detection_data


# if confidence > 0.1 == acne
"""Return the Accumulation of all acne confidence that is > 0.1 """
"""Change the scale out of 10"""

