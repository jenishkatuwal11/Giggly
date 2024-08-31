const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("Jenish-Message", (message) => {
    // Match the event name correctly
    io.emit("message", message);
  });
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/index.html"); // Correctly specify the full path to the HTML file
});

server.listen(8000, () => console.log(`Server is started at PORT: 8000`));
