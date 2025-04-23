import numpy as np
from PIL import Image
import torch
import albumentations as A
from albumentations.pytorch import ToTensorV2
import os
from torch import nn, optim
import segmentation_models_pytorch as smp
import cv2
import matplotlib.pyplot as plt
class UNet(nn.Module):
    def __init__(self):
        super(UNet, self).__init__()
        self.model = smp.Unet(
            encoder_name="resnet34",
            encoder_weights="imagenet",
            in_channels=3,
            classes=1
        )

    def forward(self, x):
        return self.model(x)
    
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = UNet().to(device)
model_path = os.path.join(os.path.dirname(__file__), 'best_model.pth')
state_dict = torch.load(model_path, map_location=device)
model.load_state_dict(state_dict)
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adam(model.parameters(), lr=1e-4)
# Define Wrinkle Analysis Function
def analyze_wrinkles_with_heatmap(model, image_path):
    model.eval()

    # Load Image
    image = np.array(Image.open(image_path).convert("RGB"))

    # Preprocessing
    transform = A.Compose([
        A.Resize(256, 256),
        A.Normalize(mean=(0.5, 0.5, 0.5), std=(0.5, 0.5, 0.5)),
        ToTensorV2(),
    ])

    image_tensor = transform(image=image)["image"].unsqueeze(0).to(device)

    # Predict Mask
    with torch.no_grad():
        pred = model(image_tensor).squeeze().cpu().numpy()

    # Convert prediction to binary mask
    binary_mask = (pred > 0.5).astype(np.uint8)  # Threshold at 0.5

    # Calculate Wrinkle Percentage
    total_pixels = binary_mask.size
    wrinkle_pixels = np.sum(binary_mask)
    wrinkle_percentage = (wrinkle_pixels / total_pixels) * 100

    # Convert percentage to severity scale (0-10)
    if wrinkle_percentage < 0.05:
        severity = 0  # No wrinkles detected (Excellent)
    elif wrinkle_percentage < 0.1:
        severity = 1  # Very minimal wrinkles (Very Good)
    elif wrinkle_percentage < 0.15:
        severity = 2  # Minimal wrinkles (Good)
    elif wrinkle_percentage < 0.2:
        severity = 3  # Very mild wrinkles (Above Average)
    elif wrinkle_percentage < 0.25:
        severity = 4  # Mild wrinkles (Average)
    elif wrinkle_percentage < 0.3:
        severity = 5  # Noticeable wrinkles (Below Average)
    elif wrinkle_percentage < 0.35:
        severity = 6  # Moderate wrinkles (Moderate)
    elif wrinkle_percentage < 0.4:
        severity = 7  # Significant wrinkles (Significant)
    elif wrinkle_percentage < 0.45:
        severity = 8  # Severe wrinkles (Severe)
    elif wrinkle_percentage < 0.5:
        severity = 9  # Very severe wrinkles (Very Severe)
    else:
        severity = 10  # Extremely severe wrinkles (Extremely Severe)


    # Generate Skincare Recommendation
    recommendation = get_recommendation(severity)

    # Create Heatmap Overlay
    heatmap = cv2.applyColorMap((binary_mask * 255).astype(np.uint8), cv2.COLORMAP_JET)
    overlayed_image = cv2.addWeighted(cv2.resize(image, (256, 256)), 0.6, heatmap, 0.4, 0)

    # Display Results
    plt.figure(figsize=(15, 5))

    plt.subplot(1, 3, 1)
    plt.imshow(image)
    plt.title("Original Image")

    plt.subplot(1, 3, 2)
    plt.imshow(binary_mask, cmap="gray")
    plt.title(f"Predicted Mask\nSeverity Score: {severity}/10")

    plt.subplot(1, 3, 3)
    plt.imshow(overlayed_image)
    plt.title("Wrinkle Heatmap")

    plt.show()

    print(f"🔹 **Wrinkle Severity:** {severity}/10")
    print(f"🔹 **Wrinkle Area Coverage:** {wrinkle_percentage:.2f}%")
    print(f"💡 **Skincare Recommendation:** {recommendation}")

    return severity, wrinkle_percentage, recommendation

# Skincare Recommendation Function
def get_recommendation(severity):
    if severity == 0:
        return "Excellent skin condition! Maintain hydration and UV protection."
    elif severity <= 2:
        return "Mild wrinkles detected. Use a hydrating moisturizer and sunscreen daily."
    elif severity <= 4:
        return "Moderate wrinkles. Consider retinol and vitamin C serum for skin repair."
    elif severity <= 6:
        return "Noticeable wrinkles. Hyaluronic acid and collagen-boosting treatments recommended."
    elif severity <= 8:
        return "Severe wrinkles. Try professional treatments like laser therapy or fillers."
    else:
        return "Very severe wrinkles. Consult a dermatologist for advanced anti-aging solutions."

# Test the function

severity_score, wrinkle_percent, skincare_advice = analyze_wrinkles_with_heatmap(model, '/Users/tt/Downloads/IMG_9416.jpg')
