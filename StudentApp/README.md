# IntelliSafe StudentApp

A lightweight React Native (Expo) app for campus safety. Students can authenticate using their register number and:

- Tap a **panic button** to alert campus security if they feel threatened by a stalker.
- File an incident report.
- See emergency contact numbers.

---

## 📸 App Screenshots

![App Screenshot 1](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0001.jpg)
![App Screenshot 2](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0002.jpg)
![App Screenshot 3](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0003.jpg)
![App Screenshot 4](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0004.jpg)
![App Screenshot 5](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0005.jpg)

---

## 🚀 How to Run

### ✅ Prerequisites

- Node.js v14+ and npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android/iOS device with [Expo Go](https://expo.dev/client) app installed, **or** emulator/simulator

### 📦 1. Clone the Repo

```bash
git clone https://github.com/harishvardhan27/IntelliSafe.git
cd IntelliSafe/StudentApp
```

### 📥 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### ⚙️ 3. Configure API Endpoint

Copy `.env.example` to `.env`, and set your backend API URL:

```env
API_BASE_URL=https://your-server.example.com/api
```

### 📱 4. Run the App

```bash
expo start
```

- Scan the QR code with Expo Go on your device, **or**
- Press `a` for Android emulator, `i` for iOS simulator (Mac only)

### 📲 5. Usage

- Log in with your **register number**
- Tap the **Panic** button for emergency alert
- File incident reports using the form
- View emergency contact info from the menu

---

## 📁 Folder Structure

```
StudentApp/
├── src/components/
│   ├── Home.js
│   ├── ReportIncident.js
│   ├── EmergencyContacts.js
│   └── MyReports.js
├── App.js
├── .env.example
└── ...
```

---

## 📝 Expected API Endpoints

- `POST /panic`
- `POST /incidents`
- `GET /emergency-contacts`
- `GET /my-reports?userId=`

---

> 🔗 For backend setup and additional documentation, see the [main IntelliSafe repo](https://github.com/harishvardhan27/IntelliSafe).

---

# ⚛️ Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### `npm test`

Launches the test runner in interactive watch mode.  
See [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.  
Optimized and minified for performance.

### `npm run eject`

**Warning:** This is a one-way operation. You can’t go back after ejecting.

---

## 📚 Learn More

- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Bundle Analysis](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Progressive Web App Guide](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment Guide](https://facebook.github.io/create-react-app/docs/deployment)
- [Troubleshooting Build Issues](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
