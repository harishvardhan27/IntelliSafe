import cv2
import numpy as np

class ObjectDetector:
    def __init__(self):
        # In a real implementation, load YOLO here
        pass
    
    def detect(self, frame):
        # Mock detection - in real use would run YOLOv8
        height, width = frame.shape[:2]
        mock_boxes = np.array([[width*0.2, height*0.2, width*0.4, height*0.4]])
        mock_classes = np.array([0])  # 0=person
        return mock_boxes, mock_classes