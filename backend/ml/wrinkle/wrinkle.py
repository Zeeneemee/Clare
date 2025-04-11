import numpy as np
from PIL import Image
import torch
import albumentations as A
from albumentations.pytorch import ToTensorV2
import os
from torch import nn, optim
import segmentation_models_pytorch as smp

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
    
def analyze_wrinkles(model, image_PIL):
    model.eval()
    # Load Image
    image = np.array(image_PIL)
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
    if wrinkle_percentage < 1:
        severity = 0  # Good
    elif wrinkle_percentage < 5:
        severity = 1  # Very Mild
    elif wrinkle_percentage < 10:
        severity = 3  # Mild
    elif wrinkle_percentage < 20:
        severity = 5  # Moderate
    elif wrinkle_percentage < 30:
        severity = 7  # Severe
    else:
        severity = 10  # Very Severe


    return severity, wrinkle_percentage

# Set up device and load model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = UNet().to(device)
model_path = os.path.join(os.path.dirname(__file__), 'wrinkle_model.pth')
state_dict = torch.load(model_path, map_location=device)
model.load_state_dict(state_dict)
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adam(model.parameters(), lr=1e-4)

