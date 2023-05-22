import { Server } from "socket.io";
import express, { Application } from "express";
import cors from "cors";
import * as http from "http";

const app: Application = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected to : ${socket.id}`);

  socket.on("join_room", (chatId) => {
    socket.join(chatId);
    console.log(`user:  ${socket.id} , joined room :${chatId}`);
  });

});

server.listen(5001, () => {
    console.log(
        "Socket is running in port 3003"
    );
})
