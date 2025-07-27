import cv2
import os
from datetime import datetime
import numpy as np

class VideoRecorder:
    def __init__(self):
        self.cap = None
        self.recording = False
        self.patrol_dir = ""
        self.frame_count = 0
        
        # Virtual drone properties
        self.drone_pos = [320, 240]  # Center of frame
        self.waypoints = [(100, 100), (500, 100), (500, 400), (100, 400)]
        self.current_wp = 0
        self.speed = 2
        
    def start_recording(self, patrol_name):
        self.patrol_dir = os.path.join("data", "patrols", patrol_name)
        os.makedirs(self.patrol_dir, exist_ok=True)
        
        self.cap = cv2.VideoCapture(0)
        if not self.cap.isOpened():
            raise Exception("Could not open camera")
        
        self.recording = True
        self.frame_count = 0
        
    def update_drone_position(self):
        """Move virtual drone along waypoints"""
        if not self.waypoints:
            return
            
        target = self.waypoints[self.current_wp]
        dx = target[0] - self.drone_pos[0]
        dy = target[1] - self.drone_pos[1]
        distance = (dx**2 + dy**2)**0.5
        
        if distance < self.speed:
            self.current_wp = (self.current_wp + 1) % len(self.waypoints)
        else:
            self.drone_pos[0] += dx/distance * self.speed
            self.drone_pos[1] += dy/distance * self.speed
    
    def draw_drone_overlay(self, frame):
        """Draw virtual drone and waypoints on frame"""
        # Draw waypoints
        for i, wp in enumerate(self.waypoints):
            color = (0, 0, 255) if i == self.current_wp else (0, 255, 255)
            cv2.circle(frame, wp, 8, color, -1)
        
        # Draw drone (simple circle)
        drone_pos = (int(self.drone_pos[0]), int(self.drone_pos[1]))
        cv2.circle(frame, drone_pos, 15, (255, 0, 0), -1)
        cv2.circle(frame, drone_pos, 15, (0, 0, 0), 2)
        
        # Draw drone info
        cv2.putText(frame, f"Drone: {drone_pos}", (10, 30), 
                   cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
        
        return frame
        
    def capture_frame(self):
        if not self.recording or not self.cap:
            return None
            
        ret, frame = self.cap.read()
        if not ret:
            return None
        
        # Update drone position
        self.update_drone_position()
        
        # Add drone overlay
        frame_with_drone = self.draw_drone_overlay(frame.copy())
        
        # Save frame
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
        frame_path = os.path.join(self.patrol_dir, f"frame_{self.frame_count:06d}_{timestamp}.jpg")
        cv2.imwrite(frame_path, frame_with_drone)
        
        self.frame_count += 1
        
        # Convert BGR to RGB for display
        rgb_frame = cv2.cvtColor(frame_with_drone, cv2.COLOR_BGR2RGB)
        return rgb_frame
        
    def stop_recording(self):
        self.recording = False
        if self.cap:
            self.cap.release()
            self.cap = None
