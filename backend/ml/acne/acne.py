from ultralytics import YOLO

def acne_detection(image_path):
    model = YOLO("backend/ml/acne/acne.pt")  # Load your custom acne detection model
    results = model.predict(image_path, save=True, project=save_dir,name="acne_result" , show=True)  # Process the image
    
    # Process and print results
    for result in results:
        print(result.boxes)  # This prints detections (bounding boxes, confidence scores, etc.)

# Specify the image path
image_path = "/Users/tt/Documents/Coding/Claire/backend/uploads/acnetest.jpg"
save_dir = "/Users/tt/Documents/Coding/Claire/backend/uploads"
acne_detection(image_path)
