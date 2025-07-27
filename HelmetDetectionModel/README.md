This module implements an AI-based helmet detection system using YOLOv8, designed for campus surveillance to ensure safety compliance in areas like workshops, construction zones, and laboratories.

Part of the IntelliSafe Smart Campus Security Ecosystem.


### Features

* Detects persons and whether they are wearing helmets
* Supports image and video input
* Highlights:

  * Green Box: Person with Helmet
  * Red Box: Person without Helmet
* Can be integrated into live CCTV or Streamlit dashboards


### Folder Contents

| File                          | Description                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| `IntelliSafe_Helmet.ipynb`    | Jupyter Notebook implementing the YOLOv8-based helmet detection |
| `sample_video.mp4` (optional) | Example video for testing (not included here)                   |




#### 1. Environment Setup

You can run this in Google Colab or locally.

**Colab Setup:**

* Upload the notebook and follow the instructions.

**Local Setup:**

```bash
pip install ultralytics opencv-python
```

#### 2. Run Detection

Example usage:

```python
from ultralytics import YOLO

model = YOLO("yolov8n.pt")  # Replace with a custom-trained helmet model if available
results = model("input_video.mp4", show=True)
```

---

### Output

Detected people are marked:

* Green: Wearing a Helmet (Compliant)
* Red: Not Wearing a Helmet (Violation)

---

### Integration

This module can be connected to:

* Streamlit dashboards
* Security alert systems
* Drone video analysis modules




