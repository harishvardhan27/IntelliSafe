# 🛸 IntelliSafe Drone Simulator App

A stand-alone simulation tool for virtual **drone sweeps** over a campus map, with utilities to:

- Simulate patrol routes using Pygame
- Record or stream frames of the sweep
- Generate videos and visualizations
- Feed outputs into the main IntelliSafe surveillance dashboard

---

## 📁 Repository Structure

```
drone-sim-app/
├── app/
│   ├── detection.py          # Object detection utilities (YOLOv8 wrapper)
│   ├── drone_simulator.py    # Pygame-based sweep simulation script
│   ├── streamlit_app.py      # Streamlit dashboard to visualize sweeps
│   ├── video_recorder.py     # Script to batch-record or stream simulation frames
│   └── __init__.py
├── data/
│   ├── waypoints.json        # Waypoints defining the sweep path
│   └── patrols/              # Auto-generated output folders per sweep
├── Dockerfile                # Container image definition
├── docker-compose.yml        # Compose file to launch simulator and dashboard
├── requirements.txt          # Python dependencies
└── README.md                 # This file
```

---

## ✅ Prerequisites

- Python **3.8+**
- `pip` (Python package installer)
- (Optional) `ffmpeg` – for converting frames into a video
- (Optional) Docker + Docker Compose

---

## ⚙️ Installation

### 1. Clone the IntelliSafe Repository

```bash
git clone https://github.com/harishvardhan27/IntelliSafe.git
cd IntelliSafe/drone-sim-app
```

### 2. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 3. Verify Data Assets

Ensure `data/waypoints.json` exists and defines your sweep path.

Custom visuals:
- Place your campus map image as:  
  `app/assets/campus_map.png`
- Place your drone icon image as:  
  `app/assets/drone.png`

---

## 🛠️ Configuration

### 🔹 Waypoints File (`data/waypoints.json`)

Define the drone sweep path in the following format:

```json
[
  { "x": 0.1, "y": 0.2, "duration": 5 },
  { "x": 0.5, "y": 0.2, "duration": 5 }
]
```

Each waypoint includes:
- `x`, `y`: Normalized coordinates (0 to 1)
- `duration`: Time (in seconds) the drone stays at that point

### 🔹 Map & Drone Sprite

To customize visuals, replace:
- `app/assets/campus_map.png`
- `app/assets/drone.png`

---

## 🚀 Usage

### 🕹️ 1. Run the Pygame Drone Simulator

```bash
python app/drone_simulator.py
```

A window will open showing a drone icon flying over the campus map.  
📸 Frames will be saved to:  
`data/patrols/drone_patrol_<timestamp>/`

Close the window after the sweep completes.

---

### 🎥 2. Record or Stream the Simulation (Optional)

Convert frames into a video file:

```bash
python app/video_recorder.py --input-dir data/patrols/drone_patrol_<timestamp>/ --output-file sweep.mp4
```

---

### 📊 3. Visualize Sweeps with Streamlit

Start the Streamlit app to view analytics and replays:

```bash
streamlit run app/streamlit_app.py --server.port 8501
```

Open your browser at:  
👉 [http://localhost:8501](http://localhost:8501)

You'll see:
- Animated drone sweep playback
- Waypoint markers
- Heatmap of coverage

---

### 🐳 4. Docker Deployment (Optional)

To run the simulator and dashboard using Docker:

```bash
docker-compose up --build
```

- The simulator will run `drone_simulator.py` on a schedule
- The dashboard will be available at [http://localhost:8501](http://localhost:8501)

---

## 📌 Notes

- All sweep outputs are saved under `data/patrols/`
- You can integrate video or heatmap output into the IntelliSafe main dashboard
- Ideal for simulating drone patrols in restricted zones or remote monitoring environments

---

> 🔗 For related projects, visit the [main IntelliSafe repository](https://github.com/harishvardhan27/IntelliSafe)
