from ultralytics import YOLO
import os
import cv2
def acne_detection(image_path):
    detection_data = {"positions": [], "confidence": []}
    model_path = os.path.join(os.path.dirname(__file__), "acne_best (1).pt")
    # ✅ Remove existing output directory if it exists
    model = YOLO(model_path)
    results = model.predict(image_path, imgsz=1024,name="acne_result", conf=0.1, iou=0.4)  # Process the image
    for result in results:
        boxes = result.boxes  
        for box in boxes:
           x_min, y_min, x_max, y_max = box.xyxy[0].tolist()  
           confidence = float(box.conf[0]) 
           detection_data["positions"].append({"x": int(x_min), "y": int(x_max), "width": int(x_min-x_max), "height": int(y_min-y_max)})
           detection_data["confidence"].append(confidence)
           total_con = sum(detection_data["confidence"])
    return detection_data


# if confidence > 0.1 == acne
"""Return the Accumulation of all acne confidence that is > 0.1 """
"""Change the scale out of 10"""
