
## ObjectDetectionModel – IntelliSafe Campus Surveillance Module

This module is a part of the **IntelliSafe Smart Campus Security Ecosystem**, providing AI-powered real-time object detection, person-following (stalker behavior) detection, and fight detection using YOLOv8 and DeepSORT.

---

### Key Features

* Real-time object detection (people, vehicles, etc.)
* Person-following detection for identifying stalking behavior
* Fight detection via close-proximity movement patterns and sudden motion bursts
* Automatic screenshot capture when unsafe events are detected
* Easily extendable to restricted area detection, helmet monitoring, or weapons detection

---

### Folder Contents

| File                         | Description                                                         |
| ---------------------------- | ------------------------------------------------------------------- |
| `ObjectDetectionModel.ipynb` | YOLOv8-based object, stalker, and fight detection notebook          |
| `stalker_output.mp4`         | (Optional) Output video with red-box alerts for suspicious behavior |
| `stalker_detected_frame.jpg` | Screenshot when stalking or fight is detected                       |

---

### Setup Instructions

#### Google Colab (Recommended)

1. Upload `ObjectDetectionModel.ipynb`
2. Mount Google Drive (if using video files from Drive)
3. Run all cells step by step

#### Local Setup

```bash
pip install ultralytics opencv-python-headless deep-sort-realtime numpy
```

---

### How It Works

1. **Object Detection**
   Uses `YOLOv8n` to detect persons and objects in video frames.

2. **Tracking with DeepSORT**
   Assigns consistent IDs to each detected person to track motion across frames.

3. **Stalker Detection**
   Checks if one person stays too close to another for more than 10 seconds. If so, the bounding box turns red and a screenshot is saved.

4. **Fight Detection**
   If multiple people are detected in close proximity with erratic motion patterns, it triggers a fight alert.

---

### Sample Code

```python
from ultralytics import YOLO
model = YOLO("yolov8n.pt")
results = model("video.mp4")
```

---

### Use Cases

* Campus patrolling
* Restricted area entry alerts
* Student safety in hostels and corridors
* Night vision drone monitoring (with thermal/night-vision feeds)
* Helmet detection and safety compliance (extendable)

---

### Privacy & Ethics

* Non-relevant faces can be anonymized (if enabled)
* Screenshots are stored only when detection occurs
* Alerts can be routed to security personnel only

