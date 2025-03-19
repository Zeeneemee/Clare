from ultralytics import YOLO
import os 
def Scar_detection(image_path):
    detection_data = {"positions": [], "confidence": []}
    model_path = os.path.join(os.path.dirname(__file__), "scar.pt")
    model = YOLO(model_path)
    results = model.predict(image_path ,name="scar_predict" , show=True)  # Process the image
    for result in results:
        boxes = result.boxes
        for box in boxes:
           x_min, y_min, x_max, y_max = box.xyxy[0].tolist()  
           confidence = float(box.conf[0]) 
           detection_data["positions"].append({"x": int(x_min), "y": int(x_max), "width": int(x_min-x_max), "height": int(y_min-y_max)})
           detection_data["confidence"].append(confidence)
    return detection_data

