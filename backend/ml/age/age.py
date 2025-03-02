import cv2
import dlib
from PIL import Image
from transformers import ViTFeatureExtractor, ViTForImageClassification

import torch

def age_detection(image_path):
# Load the image
  path = image_path
  im = cv2.imread(path)


  # Initialize face detector
  face_detector = dlib.get_frontal_face_detector()

  # Detect faces
  faces = face_detector(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY))
  if not faces:
      mssg = "No face detected"
      cv2.putText(im, mssg, (40, 40), cv2.FONT_HERSHEY_SIMPLEX, 2, (200, 200, 200), 2)
      cv2_imshow(cv2.resize(im, (720, 720)))
      cv2.waitKey(0)
  else:
      # Initialize bounding boxes
      Boxes = []
      for face in faces:
          x =  face.left()
          y = face.top()
          x2 = face.right()
          y2 = face.bottom()
          box = [x, y, x2, y2]
          Boxes.append(box)
          cv2.rectangle(im, (x, y), (x2, y2), (0, 200, 200), 5)

      # Load the Hugging Face model and transforms
      model = ViTForImageClassification.from_pretrained("nateraw/vit-age-classifier")
      transforms = ViTFeatureExtractor.from_pretrained("nateraw/vit-age-classifier")

      for box in Boxes:
          # Crop face
          face = im[box[1]:box[3], box[0]:box[2]]
          if face.size == 0:
              continue  # Skip empty crops
          # Convert to PIL image
          face_pil = Image.fromarray(cv2.cvtColor(face, cv2.COLOR_BGR2RGB))
          # Transform the image
          inputs = transforms(face_pil, return_tensors="pt")
          # Predict age category
          output = model(**inputs)
          proba = torch.nn.functional.softmax(output.logits, dim=1)
          preds = proba.argmax(1)
          age_class_index = preds.item()

          # Define the age category labels (these are placeholders; check Hugging Face docs for actual labels)
          labels = [
              "0-2", "3-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70+"
          ]
          age_label = labels[age_class_index]

          # Add label to image
          cv2.putText(im, f"Face detected: {age_label}", (box[0], box[1] - 10),
                      cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 255), 2, cv2.LINE_AA)

      # Show the final image
      cv2_imshow(cv2.resize(im, (720, 720)))
      cv2.waitKey(0)
