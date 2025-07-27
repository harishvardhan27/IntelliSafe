```markdown
# IntelliSafe StudentApp

A lightweight React Native (Expo) app for campus safety. Students can authenticate using their register number and:
- Tap a panic button to alert campus security if they feel threatened by a stalker.
- File an incident report.
- See emergency contact numbers.

![App Screenshot 1](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0001.jpg)
![App Screenshot 2](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0002.jpg)
![App Screenshot 3](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0003.jpg)
![App Screenshot 4](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0004.jpg)
![App Screenshot 5](https://raw.githubusercontent.com/harishvardhan27/IntelliSafe/main/StudentApp/assets/IMG-20250727-WA0005.jpg)


 🚀 How to Run

Prerequisites

- Node.js v14+ and npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android/iOS device with [Expo Go](https://expo.dev/client) app installed, or emulator/simulator

1. Clone the Repo

```
git clone https://github.com/harishvardhan27/IntelliSafe.git
cd IntelliSafe/StudentApp
```

 2. Install Dependencies

```
npm install
# or
yarn install
```

3. Configure API Endpoint

Copy `.env.example` to `.env`, and fill in your backend API URL:
```
API_BASE_URL=https://your-server.example.com/api
```

4. Run the App
```
expo start
```
- Scan QR with Expo Go on your device, or
- Press `a` (Android emulator) or `i` (iOS simulator on Mac)

5. Usage

- Log in with your register number
- Use the #Panic button for immediate emergency alert
- File incident reports via the app form
- Tap menu for Emergency Contacts

📁 Structure

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

📝 Minimal API Endpoints Expected

- `POST /panic`
- `POST /incidents`
- `GET /emergency-contacts`
- `GET /my-reports?userId=`

---

> For more info or backend setup, see the [main IntelliSafe repo](https://github.com/harishvardhan27/IntelliSafe).
```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
