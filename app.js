const express = require("express")
const app = express();
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));


app.get("/", (req, res)=>{
    res.send("Hello This is a Real Time Tracker side quest project ; )" );
})

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`APP is listening at ${PORT}...`)
});