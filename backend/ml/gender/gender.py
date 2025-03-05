from ultralytics import YOLO
import os
import shutil
def Gender(image_path,save_dir):
    BASE_UPLOAD_DIR = "/Users/tt/Documents/Coding/Claire/backend/uploads/"
    output_dir = os.path.join(BASE_UPLOAD_DIR, "gender_result")

    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)  
    model = YOLO("/Users/tt/Documents/Coding/Claire/backend/ml/gender/gender.pt")
    results = model.predict(image_path, save=True, project=save_dir,name="gender_result" , show=True)
    class_map = {0: "Female", 1: "Male"}
    detected_genders = ''
    for result in results:
        for box in result.boxes:
            class_id = int(box.cls[0].item())  # Convert tensor to integer
            detected_genders = class_map.get(class_id,'unknown')

    # Return detected genders
    return detected_genders
