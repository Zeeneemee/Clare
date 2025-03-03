from ultralytics import YOLO
import os
def acne_detection(image_path,save_dir):
    detection_data = {"positions": [], "confidence": []}
    model = YOLO("/Users/tt/Documents/Coding/Claire/backend/ml/acne/acne.pt")
    results = model.predict(image_path, save=True, project=save_dir,name="acne_result" , show=True)  # Process the image
    

    for result in results:
        boxes = result.boxes  
        for box in boxes:
           x_min, y_min, x_max, y_max = box.xyxy[0].tolist()  
           confidence = float(box.conf[0]) 
           detection_data["positions"].append({"x": int(x_min), "y": int(x_max), "width": int(x_min-x_max), "height": int(y_min-y_max)})
           detection_data["confidence"].append(confidence)
    return detection_data


# if confidence > 0.1 == acne
"""Accumulate all acne confidence that is > 0.1 and return the average confidence"""