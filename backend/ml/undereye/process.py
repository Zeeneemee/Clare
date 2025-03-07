import cv2
import dlib
import numpy as np

# Load Dlib's pre-trained face detector and landmarks predictor
face_detector = dlib.get_frontal_face_detector()
landmarks_predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")

# Function to detect the face and landmarks
def detect_face_and_landmarks(image_path):
    # Load the image
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect face(s)
    faces = face_detector(gray)
    if len(faces) == 0:
        print("No face detected.")
        return None, None, None

    # Assume the first detected face is the target
    face = faces[0]

    # Detect landmarks
    landmarks = landmarks_predictor(gray, face)

    # Convert landmarks to a numpy array
    landmarks_points = [(landmarks.part(i).x, landmarks.part(i).y) for i in range(68)]
    return img, face, landmarks_points