import os
import cv2
import dlib
import numpy as np

# Function to calculate the distance between two points
def distance(p1, p2):
    return np.linalg.norm(np.array(p1) - np.array(p2))

# Function to calculate brightness for a given region
def calculate_brightness(region, image_rgb):
    x, y, w, h = region
    region_img = image_rgb[y:y+h, x:x+w]  # Crop the region from the image
    gray_region = cv2.cvtColor(region_img, cv2.COLOR_RGB2GRAY)  # Convert to grayscale
    return np.mean(gray_region)  # Return the average brightness

# Function to calculate the dark circle score based on brightness difference
def calculate_dark_circle_score(brightness_diff):
    # Map brightness difference to a score between 1 and 10
    score = np.clip((brightness_diff - 10) / 10 + 5, 1, 10)

    # Define score labels based on the score
    if score <= 2:
        label = "Minimal"
    elif score <= 5:
        label = "Moderate"
    elif score <= 8:
        label = "Significant"
    else:
        label = "Severe"

    return score, label

# Function to process a PIL image and calculate dark circle score
def Predict_underEye(img_PIL):
    # Ensure the image is in RGB mode and convert to a NumPy array
    img_PIL = img_PIL.convert("RGB")
    image_rgb = np.array(img_PIL)

    # Initialize dlib's face detector and shape predictor
    face_detector = dlib.get_frontal_face_detector()
    predictor_path = os.path.join(os.path.dirname(__file__), 'shape_predictor_68_face_landmarks.dat')
    shape_predictor = dlib.shape_predictor(predictor_path)

    # Detect faces in the image
    detected_faces = face_detector(image_rgb, 1)
    if len(detected_faces) == 0:
        raise ValueError("No faces detected in the image.")

    results = []

    # Loop through all detected faces and process each one
    for i, face in enumerate(detected_faces):
        # Get facial landmarks for the face
        shape = shape_predictor(image_rgb, face)
        landmarks = np.array([[p.x, p.y] for p in shape.parts()])

        # Calculate key distances for dynamic scaling
        eye_distance = distance(landmarks[36], landmarks[45])  # Distance between left and right eye
        face_width = distance(landmarks[0], landmarks[16])      # Total width of the face

        # Define regions dynamically based on face proportions
        regions = {
            'under_eye_left': (landmarks[36, 0], landmarks[36, 1] + 15, int(eye_distance * 0.3), 20),
            'under_eye_right': (landmarks[45, 0] - int(eye_distance * 0.3), landmarks[45, 1] + 15, int(eye_distance * 0.3), 20),
            'forehead': (landmarks[19, 0] + int(face_width * 0.05), landmarks[19, 1] - 50, int(face_width * 0.4), 50),
            'left_cheek': (landmarks[2, 0] + int(face_width * 0.05), landmarks[30, 1] - 20, int(face_width * 0.15), 30),
            'right_cheek': (landmarks[14, 0] - int(face_width * 0.2), landmarks[30, 1] - 20, int(face_width * 0.15), 30),
            'chin': (landmarks[8, 0] - int(face_width * 0.1),
                     landmarks[8, 1] - int(eye_distance * 0.3),
                     int(face_width * 0.2),
                     int(eye_distance * 0.22))
        }

        # Calculate brightness for under-eye and facial regions
        under_eye_brightness = [calculate_brightness(region, image_rgb) for region in [regions['under_eye_left'], regions['under_eye_right']]]
        face_brightness = [calculate_brightness(region, image_rgb) for region in [regions['forehead'], regions['left_cheek'], regions['right_cheek'], regions['chin']]]

        # Compute average brightness values
        avg_under_eye_brightness = np.mean(under_eye_brightness)
        avg_face_brightness = np.mean(face_brightness)

        # Calculate the difference between face and under-eye brightness
        brightness_diff = avg_face_brightness - avg_under_eye_brightness

        # Calculate the dark circle score and determine the label
        score, score_label = calculate_dark_circle_score(brightness_diff)

        # Store the result for this face
        results.append({
            "dark_circle_score": float(score),
            "label": score_label
        })

    return results
