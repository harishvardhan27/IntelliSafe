import streamlit as st
import requests
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime, timedelta
import os
import json
import time

# Page config
st.set_page_config(
    page_title="IntelliSafe Admin Dashboard",
    page_icon="🛡️",
    layout="wide"
)

# Initialize session state
if 'alerts' not in st.session_state:
    st.session_state.alerts = []
if 'drone_status' not in st.session_state:
    st.session_state.drone_status = "Offline"

# Header
st.title("🛡️ IntelliSafe Admin Dashboard")
st.markdown("**AI-Powered Smart Campus Surveillance Platform**")

# Sidebar
with st.sidebar:
    st.header("🎛️ System Controls")
    
    # Service Status
    st.subheader("Service Status")
    st.success("🟢 API Server: Online")
    st.success("🟢 Drone Sim: Active")
    st.info("🟡 Mobile App: Connected")
    
    # Quick Actions
    st.subheader("Quick Actions")
    if st.button("🚨 Emergency Alert"):
        st.session_state.alerts.append({
            'time': datetime.now(),
            'type': 'Emergency',
            'message': 'Manual emergency alert triggered'
        })
        st.success("Emergency alert sent!")

# Metrics Row
col1, col2, col3, col4 = st.columns(4)
with col1:
    st.metric("🎥 Active Cameras", "12", "2")
with col2:
    st.metric("🚁 Drones Online", "3", "1")
with col3:
    st.metric("⚠️ Active Alerts", len(st.session_state.alerts), "0")
with col4:
    st.metric("👥 People Detected", "47", "5")

# Main Tabs
tab1, tab2, tab3, tab4 = st.tabs(["🎥 Live Monitoring", "🤖 AI Models", "🚁 Drone Control", "📊 Analytics"])

with tab1:
    st.header("Live Camera Feeds")
    cam_col1, cam_col2, cam_col3 = st.columns(3)
    
    with cam_col1:
        st.subheader("📹 Camera 1 - Main Gate")
        st.success("🟢 Online - All clear")
        st.image("https://via.placeholder.com/300x200?text=Camera+1", width=300)
    
    with cam_col2:
        st.subheader("📹 Camera 2 - Library")
        st.warning("🟡 Motion detected")
        st.image("https://via.placeholder.com/300x200?text=Camera+2", width=300)
    
    with cam_col3:
        st.subheader("📹 Camera 3 - Parking")
        st.success("🟢 All clear")
        st.image("https://via.placeholder.com/300x200?text=Camera+3", width=300)
    


with tab2:
    st.header("AI Model Performance")
    
    col1, col2 = st.columns(2)
    with col1:
        st.subheader("🎯 Object Detection")
        st.json({
            "status": "Active",
            "accuracy": "94.2%",
            "objects_detected": 156,
            "last_update": "2 minutes ago"
        })
    
    with col2:
        st.subheader("🪖 Helmet Detection")
        st.json({
            "status": "Active", 
            "accuracy": "96.8%",
            "violations": 3,
            "last_update": "1 minute ago"
        })
    


with tab3:
    st.header("Drone Fleet Management")
    
    # Drone controls
    selected_drone = st.selectbox("Select Drone", ["Drone 1", "Drone 2", "Drone 3"])
    
    col1, col2, col3 = st.columns(3)
    with col1:
        if st.button("🚁 Start Patrol"):
            st.success(f"{selected_drone} patrol started")
    with col2:
        if st.button("🏠 Return to Base"):
            st.info(f"{selected_drone} returning")
    with col3:
        if st.button("📹 Start Recording"):
            st.success(f"{selected_drone} recording")
    
    # Drone status
    st.subheader("Fleet Status")
    st.write("🟢 Drone 1: Patrolling (85%)")
    st.write("🟡 Drone 2: Charging (15%)")
    st.write("🟢 Drone 3: Patrolling (92%)")
    
    # Drone Simulation Videos
    st.header("🚁 Live Drone Surveillance")
    
    drone_col1, drone_col2 = st.columns(2)
    
    with drone_col1:
        st.subheader("Drone 1 - Campus Patrol")
        drone_video1 = "assets/Drone_Surveillance_Scene_Generated.mp4"
        if os.path.exists(drone_video1):
            st.video(drone_video1)
        else:
            st.warning(f"Drone surveillance video 1 not found at: {drone_video1}")
    
    with drone_col2:
        st.subheader("Drone 2 - Perimeter Monitoring")
        drone_video2 = "assets/Drone_Surveillance_Video_Generated.mp4"
        if os.path.exists(drone_video2):
            st.video(drone_video2)
        else:
            st.warning(f"Drone surveillance video 2 not found at: {drone_video2}")

with tab4:
    st.header("Security Analytics")
    
    # Sample data
    dates = pd.date_range('2024-01-01', periods=7, freq='D')
    incidents = [2, 5, 3, 8, 1, 4, 6]
    
    df = pd.DataFrame({'Date': dates, 'Incidents': incidents})
    fig = px.line(df, x='Date', y='Incidents', title='Daily Security Incidents')
    st.plotly_chart(fig, use_container_width=True)
    
    # Summary metrics
    col1, col2 = st.columns(2)
    with col1:
        st.metric("Weekly Incidents", "29", "-5")
        st.metric("Response Time", "2.3 min", "-0.5")
    with col2:
        st.metric("Detection Accuracy", "94.2%", "+1.8%")
        st.metric("False Alarms", "3", "-2")

# Recent Alerts
st.header("🚨 Recent Alerts")
if st.session_state.alerts:
    for alert in reversed(st.session_state.alerts[-5:]):
        st.write(f"🔴 **{alert['type']}** - {alert['time'].strftime('%H:%M:%S')} - {alert['message']}")
else:
    st.info("No recent alerts")

# Footer
st.markdown("---")
st.markdown(f"**IntelliSafe Dashboard** | Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")