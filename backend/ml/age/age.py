import cv2
import dlib
from PIL import Image
from transformers import ViTImageProcessor, ViTForImageClassification
import numpy as np
import torch

def age_detection(image_PIL):
    # Convert PIL image to a NumPy array and then to BGR (for OpenCV)
    image = np.array(image_PIL)
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    
    # Initialize the face detector from dlib
    face_detector = dlib.get_frontal_face_detector()
    
    # Convert image to grayscale for face detection
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Detect faces in the grayscale image
    faces = face_detector(gray_image)
    if not faces:
        return "No face detected"
    
    # Initialize list to store bounding boxes
    boxes = []
    for face in faces:
        x = face.left()
        y = face.top()
        x2 = face.right()
        y2 = face.bottom()
        box = [x, y, x2, y2]
        boxes.append(box)
        # Draw rectangle on the image (optional, for visualization)
        cv2.rectangle(image, (x, y), (x2, y2), (0, 200, 200), 5)
    
    # Load the Hugging Face model and image processor
    model = ViTForImageClassification.from_pretrained("nateraw/vit-age-classifier")
    processor = ViTImageProcessor.from_pretrained("nateraw/vit-age-classifier")
    
    # Process each detected face and predict its age category.
    # This example returns the age label for the first detected face.
    for box in boxes:
        # Crop the face region from the original image
        face_crop = image[box[1]:box[3], box[0]:box[2]]
        if face_crop.size == 0:
            continue  # Skip empty crops
        
        # Convert the cropped face back to a PIL image (convert from BGR to RGB)
        face_pil = Image.fromarray(cv2.cvtColor(face_crop, cv2.COLOR_BGR2RGB))
        
        # Preprocess the face image using the processor
        inputs = processor(face_pil, return_tensors="pt")
        
        # Run the model to get predictions
        output = model(**inputs)
        proba = torch.nn.functional.softmax(output.logits, dim=1)
        preds = proba.argmax(1)
        age_class_index = preds.item()
        
        # Define the age category labels (update these labels as required)
        labels = ["0-2", "3-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"]
        age_label = labels[age_class_index]
        
        return age_label  # Return after processing the first detected face
