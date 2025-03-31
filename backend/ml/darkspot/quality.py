from ultralytics import YOLO
import os

# Load the model
model = YOLO(os.path.join(os.path.dirname(__file__), "darkspot.pt"))
data = os.path.join(os.path.dirname(__file__), "darkspot.yaml")
# Run evaluation
metrics = model.val(data=data)

# Get per-class AP (mAP@0.5:0.95)
per_class_ap = metrics.box.maps  # List of APs for each class

# Print per-class AP
for idx, ap in enumerate(per_class_ap):
    print(f"Class {idx}: AP@0.5:0.95 = {ap:.4f}")

# Get mean AP (mAP)
mean_ap = sum(per_class_ap) / len(per_class_ap)
print(f"\nMean Average Precision (mAP@0.5:0.95): {mean_ap:.4f}")
