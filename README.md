
# RealTime Tracking App 🗺️📍

## Description
The RealTime Tracking App provides real-time location tracking using geolocation data. The application uses **Socket.io** for sending the user's latitude and longitude to the backend. The backend processes the location data and updates it on the frontend, where it is displayed on a **Leaflet map**. The app supports high-accuracy geolocation and marks pinpoint locations with interactive markers on the map.

## Features
- **Real-time Location Updates**: Continuously tracks and updates the user's location using the browser's geolocation API.
- **Socket.io Integration**: Utilizes WebSockets for real-time, two-way communication between the client and the server.
- **Leaflet Map**: Displays user locations on a map, with dynamic markers indicating their precise coordinates.
- **High-Accuracy Tracking**: Ensures precise location tracking using geolocation with high accuracy enabled.
- **Error Handling**: Includes robust error handling to manage geolocation access issues and other potential errors.

## Tech Stack 
- **Frontend**: HTML, CSS, Leaflet.js, ejs
- **Backend**: Node.js, Express.js, Socket.io
- **Geolocation**: Browser’s native Geolocation API
- **Map Rendering**: Leaflet for rendering maps and placing markers.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zubair7102/RealTime-Tracking-App
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage
Once the app is launched, the browser will request permission to access your location. If granted, the app will track and update your location in real-time, displaying your current position on the map with a marker. The backend continuously processes the data and reflects it on the map.

---
