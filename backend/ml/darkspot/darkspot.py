from ultralytics import YOLO
import os
import cv2  # <-- Import OpenCV
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
import matplotlib.patches as patches

def darkspot_detection(image_PIL):
    detection_data = {"positions": [], "confidence": []}
    # Build the model path relative to the current file
    model_path = os.path.join(os.path.dirname(__file__), "darkspot.pt")
    model = YOLO(model_path)
    # Convert PIL image to OpenCV format
    image = np.array(image_PIL)
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)  
    # Show the prediction window
    results = model.predict(source=image, name="darkspot_result", iou=0.4)  # Process the image


    # Process the detection results
    for result in results:
        boxes = result.boxes
        for box in boxes:
            # Extract bounding box coordinates (x_min, y_min, x_max, y_max)
            x_min, y_min, x_max, y_max = box.xyxy[0].tolist()
            confidence = float(box.conf[0])
            # NOTE: Usually, x_min and y_min are the top-left corner.
            # For correct width and height, you can use the following:
            detection_data["positions"].append({
                "x": int(x_min),
                "y": int(x_max),
                "width": int(x_min - x_max),
                "height": int(y_min - y_max)
            })
            detection_data["confidence"].append(confidence)

    return detection_data
