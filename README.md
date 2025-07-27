# 🛡️ IntelliSafe: AI-Powered Smart Campus Surveillance Platform

**IntelliSafe** is a modular, end-to-end prototype system designed to enhance campus security by combining AI-driven analytics, RFID-based emergency logic, and virtual drone patrol simulations. This README guides presenters, evaluators, and developers through the repository structure, setup steps, and a suggested demo flow.

# Video links:
🎬 [Student app video](StudentApp/app-demo.mp4)

🎬 [STUDEN APP DEMO](https://drive.google.com/file/d/1gtr3NkLJ3RYGVcfHeC25SI3CYkBZKmyV/view?usp=drive_link)
🎬 [Drone Virtual simulation video](drone-sim-app/drone_demo(1).mp4)

🎬 [Drone video footage simulation](drone-sim-app/drone_night_feed_demo.mp4)
---

## 📁 Repository Structure

```
IntelliSafe/
│
├── HelmetDetectionModel/      # Pretrained YOLOv8 helmet detection weights & inference scripts
├── ObjectDetectionModel/      # Pretrained YOLOv8 person & restricted-area detection weights & scripts
├── StudentApp/                # React Native (Expo) app: student panic button & incident reporting
├── drone-sim-app/             # Pygame drone sweep simulator & Streamlit viewer for patrol animations
├── api/                       # FastAPI backend: ingests AI & RFID events, runs stalker logic
├── docs/                      # Architecture diagrams, slide templates, and presentation assets
├── requirements.txt           # Global Python dependencies for backend & simulator
├── docker-compose.yml         # Orchestrates API, database, and simulator services
├── Dockerfile                 # Builds the FastAPI + dependencies container
└── README.md                  # This file
```

---

## 🚀 Core Components & Features

### 🔍 1. AI Video Inference
- **ObjectDetectionModel**: YOLOv8 detects people, helmets, restricted signs  
- **HelmetDetectionModel**: Specialized YOLOv8 for “with/without helmet”  
- **MediaPipe Pose**: Detects falls, loitering, unsafe postures  
- **DeepSORT**: Multi-object tracking with persistent IDs  
- **Outputs**: Bounding-box screenshots + event metadata (type, timestamp, camera ID)

### 🔗 2. Stalker Detection & RFID Fusion
- **Visual Logic**: Flags when Person A follows Person B within 3m for ≥ 10 consecutive frames  
- **RFID Logic**: On panic alert, analyzes 2 minutes of RFID proximity (10 sample frames)  
- **Fallback**: Continuous visual monitoring adds suspects to “Can-Be-Stalker” list if phone unavailable

### 📱 3. Student Emergency App
- **StudentApp** (React Native / Expo):  
  - Authenticate via register number ↔ RFID mapping  
  - One-tap panic button sends alert + recent RFID cross-check  
  - Incident report form and emergency contacts viewer

### 🛰️ 4. Simulated Drone Patrols
- **drone-sim-app**:  
  - Pygame script flyover using **data/waypoints.json**  
  - Frame capture to `sweep_frames/` and optional MP4 via ffmpeg  
  - Streamlit viewer to replay sweeps with heatmaps

### 🧠 5. Backend & Dashboard
- **api/**: FastAPI services for  
  - `/process_frame` – AI inference + stalker detection  
  - `/panic` – RFID proximity analysis on student alert  
  - Stores events in SQLite or Postgres  
- **docs/**: Architecture diagrams, demo slide templates

---

## ⚙️ Quick Start

### ✅ Prerequisites

- Python 3.8+ & pip  
- Node.js 14+ & npm/yarn  
- Expo CLI (`npm install -g expo-cli`)  
- (Optional) Docker & Docker Compose  
- (Optional) ffmpeg for video assembly

### 📥 1. Clone & Navigate

```bash
git clone https://github.com/harishvardhan27/IntelliSafe.git
cd IntelliSafe
```

### ⚙️ 2. Backend & API

```bash
pip install -r requirements.txt
uvicorn api.main:app --reload
```

- FastAPI runs on **http://localhost:8000**
- Swagger UI at **http://localhost:8000/docs**

### 📱 3. Student Emergency App

```bash
cd StudentApp
npm install
cp .env.example .env               # Set API_BASE_URL in .env
expo start
```

- Scan QR with **Expo Go** or run on emulator

### 🛰️ 4. Drone Simulator & Viewer

```bash
cd drone-sim-app
pip install -r requirements.txt
python drone_simulator.py          # Runs Pygame sweep, saves frames to sweep_frames/
streamlit run streamlit_app.py     # Launches dashboard on port 8501
```

- Optional:

```bash
ffmpeg -r 30 -i sweep_frames/frame_%04d.png -vcodec libx264 drone_sweep.mp4
```

### 🐳 5. Docker Compose (All-in-One)

```bash
docker-compose up --build
```

- Services: **api**, **studentapp** (if containerized), **drone-sim-app**, **db**
- Access:
  - API: `http://localhost:8000`
  - Streamlit: `http://localhost:8501`

---

## 🎬 Suggested Demo Flow

1. **Architecture Overview**: Briefly explain modular components using `docs/architecture.png`
2. **Live AI Inference**: Play a sample video through API; show bounding-box alerts and pose flags
3. **Stalker Detection**: Demonstrate 10-frame visual + RFID cross-validation; show “Can-Be-Stalker” list
4. **Panic Button**: Trigger from StudentApp; verify backend RFID analysis and dashboard notification
5. **Drone Sweep**: Run Pygame simulation; replay in Streamlit with heatmap overlay
6. **Wrap-up**: Highlight uniqueness—multi-modal fusion, student empowerment, and 24 hr hackathon feasibility

---

## 👥 Contacts & License

- **GitHub**: [https://github.com/harishvardhan27/IntelliSafe](https://github.com/harishvardhan27/IntelliSafe)
- **Contributors**: [harishvardhan27](https://github.com/harishvardhan27), [Baalaa06](https://github.com/Baalaa06)
