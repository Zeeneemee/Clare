from ultralytics import YOLO
import os
import numpy as np
import cv2  
def Gender(image_PIL):
    BASE_UPLOAD_DIR = "/Users/tt/Documents/Coding/Claire/backend/uploads/"
    image = np.array(image_PIL) 
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)  # Convert RGB to BGR for OpenCV
    model_path = os.path.join(os.path.dirname(__file__),'gender.pt')
    model = YOLO(model_path)
    results = model.predict(source=image, name="gender_result")

    # Gender mapping
    class_map = {0: "Female", 1: "Male"}
    opposite_map = {0: "Male", 1: "Female"}  # Opposite gender map

    detected_gender = "Unknown"
    
    for result in results:
        for box in result.boxes:
            class_id = int(box.cls[0].item())  # Convert tensor to integer
            confidence = float(box.conf[0].item())  # Extract confidence score
            
            # If confidence is low, return the opposite gender
            if confidence < 0.3:
                detected_gender = opposite_map.get(class_id, "Unknown")
            else:
                detected_gender = class_map.get(class_id, "Unknown")

    return detected_gender  # Return the detected or adjusted gender
