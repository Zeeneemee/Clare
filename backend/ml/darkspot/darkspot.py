from ultralytics import YOLO
import os
import cv2  # <-- Import OpenCV
import numpy as np
from PIL import Image

def darkspot_detection(image_PIL):
    detection_data = {"positions": [], "confidence": []}
    model_path = os.path.join(os.path.dirname(__file__), "darkspot.pt")
    model = YOLO(model_path)
    # Convert PIL image to OpenCV format
    image = np.array(image_PIL)
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)  # Convert RGB to BGR for OpenCV
    # Show the prediction window
    results = model.predict(source=image, name="darkspot_result" )


    # Process the detection results
    for result in results:
        boxes = result.boxes
        for box in boxes:
            x_min, y_min, x_max, y_max = box.xyxy[0].tolist()
            confidence = float(box.conf[0])
            detection_data["positions"].append({
                "x": int(x_min),
                "y": int(x_max),
                "width": int(x_min - x_max),
                "height": int(y_min - y_max)
            })
            detection_data["confidence"].append(confidence)

    return detection_data

