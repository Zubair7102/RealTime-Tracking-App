const socket = io();
// This line initializes a WebSocket connection using the socket.io library. io() establishes a connection to the server, enabling real-time, bidirectional communication between the client and the server.

if(navigator.geolocation)
    // navigator.geolocation is part of the Geolocation API that provides access to the user's location. This checks if the browser supports geolocation. If it does, the location-tracking code is executed.
{
    navigator.geolocation.watchPosition((position) =>{
        // watchPosition: This function continuously watches and updates the user's location as it changes.
        const {latitude, longitude} = position.coords;
        // callback destructures the latitude and longitude from position.coords.
        socket.emit("send-location", {latitude, longitude});
        //  coordinates are emitted to the server via the WebSocket using socket.emit("send-location", { latitude, longitude }). The event "send-location" is sent to the server along with the location data.
    }, 
    (error) =>{
        console.error(error);
    },
    {
        enableHighAccuracy: true, //Tells the browser to retrieve the most accurate location possible
        timeout: 5000, // 5 sec
        maximumAge: 0 //Ensures the browser doesn’t return a cached location. It forces the retrieval of the most recent location data.
    }
);
}