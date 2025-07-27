import streamlit as st
import os
import time
from PIL import Image
from video_recorder import VideoRecorder

# App config
st.set_page_config(page_title="Drone Video Recorder", layout="wide")

# Initialize session state
if 'recorder' not in st.session_state:
    st.session_state.recorder = VideoRecorder()
if 'last_frame' not in st.session_state:
    st.session_state.last_frame = None
if 'recording' not in st.session_state:
    st.session_state.recording = False

def update_recording():
    if st.session_state.recording:
        try:
            frame = st.session_state.recorder.capture_frame()
            if frame is not None:
                st.session_state.last_frame = frame
        except Exception as e:
            st.error(f"Camera error: {e}")
            st.session_state.recording = False

# UI Layout
col1, col2 = st.columns([1, 2])

with col1:
    st.header("Drone Video Controls")
    
    patrol_name = st.text_input("Patrol Name", "drone_patrol_" + str(int(time.time())))
    
    if st.button("Start Recording"):
        try:
            st.session_state.recorder.start_recording(patrol_name)
            st.session_state.recording = True
            st.success("Drone recording started!")
        except Exception as e:
            st.error(f"Failed to start: {e}")
    
    if st.button("Stop Recording"):
        st.session_state.recorder.stop_recording()
        st.session_state.recording = False
        st.warning("Recording stopped. Frames saved!")
    
    # Drone controls
    if st.session_state.recording:
        st.subheader("Drone Controls")
        
        col_up, col_down = st.columns(2)
        with col_up:
            if st.button("↑ Move Up"):
                if st.session_state.recorder.drone_pos[1] > 20:
                    st.session_state.recorder.drone_pos[1] -= 20
        with col_down:
            if st.button("↓ Move Down"):
                if st.session_state.recorder.drone_pos[1] < 460:
                    st.session_state.recorder.drone_pos[1] += 20
        
        col_left, col_right = st.columns(2)
        with col_left:
            if st.button("← Move Left"):
                if st.session_state.recorder.drone_pos[0] > 20:
                    st.session_state.recorder.drone_pos[0] -= 20
        with col_right:
            if st.button("→ Move Right"):
                if st.session_state.recorder.drone_pos[0] < 620:
                    st.session_state.recorder.drone_pos[0] += 20
    
    # Status
    if st.session_state.recording:
        st.info("🚁 Drone Recording")
        st.metric("Frames Captured", st.session_state.recorder.frame_count)
        if hasattr(st.session_state.recorder, 'drone_pos'):
            st.metric("Drone Position", f"({int(st.session_state.recorder.drone_pos[0])}, {int(st.session_state.recorder.drone_pos[1])})")
    else:
        st.info("🚁 Drone Standby")

with col2:
    st.header("Live Drone Feed")
    
    update_recording()
    
    if st.session_state.last_frame is not None:
        pil_image = Image.fromarray(st.session_state.last_frame.astype('uint8'))
        st.image(pil_image, caption="Live Drone Camera", width=640)
    else:
        st.info("Start recording to see drone feed")
    
    if st.session_state.recording:
        time.sleep(0.1)
        st.rerun()
