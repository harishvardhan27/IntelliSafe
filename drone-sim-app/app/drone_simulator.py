import pygame
import cv2
import numpy as np
import json
import os
from datetime import datetime
from detection import ObjectDetector

class DroneSimulator:
    def __init__(self):
        pygame.init()
        self.screen_width, self.screen_height = 1000, 700
        self.screen = pygame.display.set_mode((self.screen_width, self.screen_height))
        pygame.display.set_caption("Drone Surveillance Simulator")
        
        # Generate map instead of loading image
        self.campus_img = self.generate_map()
        
        # Load drone image
        self.drone_img = pygame.image.load("app/assets/drone_img.png")
        self.drone_img = pygame.transform.scale(self.drone_img, (40, 40))
        
        # Drone properties
        self.drone_pos = [100, 500]
        self.waypoints = self.load_waypoints()
        self.current_wp = 0
        self.speed = 3
        self.detector = ObjectDetector()
        
        # Patrol recording
        self.recording = False
        self.patrol_dir = ""
        self.frame_count = 0
        
        # Video recording
        self.video_writer = None
        self.video_frames = []
    
    def generate_map(self):
        """Generate a simple map using code"""
        surface = pygame.Surface((self.screen_width, self.screen_height))
        
        # Background - grass green
        surface.fill((34, 139, 34))
        
        # Buildings - gray rectangles
        buildings = [
            (100, 100, 150, 100),  # Building 1
            (300, 150, 200, 120),  # Building 2
            (600, 80, 180, 140),   # Building 3
            (150, 350, 160, 90),   # Building 4
            (450, 400, 140, 110),  # Building 5
            (700, 450, 120, 100),  # Building 6
        ]
        
        for building in buildings:
            pygame.draw.rect(surface, (128, 128, 128), building)
            pygame.draw.rect(surface, (64, 64, 64), building, 2)
        
        # Roads - dark gray
        pygame.draw.rect(surface, (64, 64, 64), (0, 250, self.screen_width, 30))
        pygame.draw.rect(surface, (64, 64, 64), (0, 500, self.screen_width, 30))
        pygame.draw.rect(surface, (64, 64, 64), (250, 0, 30, self.screen_height))
        pygame.draw.rect(surface, (64, 64, 64), (550, 0, 30, self.screen_height))
        
        # Road markings - yellow lines
        for y in [265, 515]:
            for x in range(0, self.screen_width, 40):
                pygame.draw.rect(surface, (255, 255, 0), (x, y, 20, 2))
        
        for x in [265, 565]:
            for y in range(0, self.screen_height, 40):
                pygame.draw.rect(surface, (255, 255, 0), (x, y, 2, 20))
        
        # Trees - green circles
        trees = [
            (80, 80), (320, 80), (520, 200), (180, 450), 
            (380, 320), (680, 300), (820, 150), (750, 600)
        ]
        
        for tree in trees:
            pygame.draw.circle(surface, (0, 100, 0), tree, 15)
        
        # Parking areas - light gray
        pygame.draw.rect(surface, (192, 192, 192), (50, 600, 200, 80))
        pygame.draw.rect(surface, (192, 192, 192), (750, 250, 180, 100))
        
        return surface
    
    def load_waypoints(self, file="data/waypoints.json"):
        try:
            with open(file) as f:
                return json.load(f)
        except:
            return [
                {"x": 100, "y": 100, "pause": 1},
                {"x": 400, "y": 200, "pause": 1},
                {"x": 700, "y": 150, "pause": 1},
                {"x": 600, "y": 450, "pause": 1},
                {"x": 200, "y": 500, "pause": 1}
            ]
    
    def update(self):
        if not self.recording or len(self.waypoints) == 0:
            return
        
        target = self.waypoints[self.current_wp]
        dx = target["x"] - self.drone_pos[0]
        dy = target["y"] - self.drone_pos[1]
        distance = (dx**2 + dy**2)**0.5
        
        if distance < self.speed:
            self.current_wp = (self.current_wp + 1) % len(self.waypoints)
        else:
            self.drone_pos[0] += dx/distance * self.speed
            self.drone_pos[1] += dy/distance * self.speed
    
    def capture_frame(self):
        """Capture drone's view and run detection"""
        view_width, view_height = 320, 240
        view_x = max(0, min(self.drone_pos[0]-view_width//2, self.screen_width-view_width))
        view_y = max(0, min(self.drone_pos[1]-view_height//2, self.screen_height-view_height))
        
        # Capture subsurface
        subsurface = self.screen.subsurface((view_x, view_y, view_width, view_height))
        pygame_image = pygame.image.tostring(subsurface, 'RGB')
        np_image = np.frombuffer(pygame_image, dtype=np.uint8)
        frame = np_image.reshape((view_height, view_width, 3))
        
        # Store frame for video
        if self.recording:
            self.video_frames.append(frame.copy())
        
        # Run detection
        boxes, classes = self.detector.detect(frame)
        
        return boxes, classes, frame
    
    def start_patrol(self, patrol_name):
        self.patrol_dir = os.path.join("data", "patrols", patrol_name)
        os.makedirs(self.patrol_dir, exist_ok=True)
        self.recording = True
        self.frame_count = 0
        self.video_frames = []
    
    def stop_patrol(self):
        self.recording = False
        
        # Save video if frames exist
        if self.video_frames:
            self.save_video()
    
    def save_video(self):
        """Save recorded frames as MP4 video"""
        if not self.video_frames:
            return
        
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        video_path = os.path.join(self.patrol_dir, f"patrol_video_{timestamp}.mp4")
        
        # Video settings
        fps = 10
        height, width = self.video_frames[0].shape[:2]
        
        # Create video writer
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(video_path, fourcc, fps, (width, height))
        
        # Write frames
        for frame in self.video_frames:
            # Convert RGB to BGR for OpenCV
            bgr_frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
            out.write(bgr_frame)
        
        out.release()
        print(f"Video saved: {video_path}")
    
    def render(self):
        # Draw the generated map
        self.screen.blit(self.campus_img, (0, 0))
        
        # Draw waypoints
        for i, wp in enumerate(self.waypoints):
            color = (255, 0, 0) if i == self.current_wp else (255, 255, 0)
            pygame.draw.circle(self.screen, color, (wp["x"], wp["y"]), 8)
            pygame.draw.circle(self.screen, (0, 0, 0), (wp["x"], wp["y"]), 8, 2)
        
        # Draw drone
        self.screen.blit(self.drone_img, (self.drone_pos[0]-20, self.drone_pos[1]-20))
        
        pygame.display.flip()
