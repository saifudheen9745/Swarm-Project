import { Server } from "socket.io";

const socketConfig = (httpServer: any) => {
  let value:any ;
  const io = new Server(httpServer, {
    pingTimeout: 60000,
    cors: {
      origin: [
        "*",
        "http://localhost:5173",
        "http://swarm-official.online",
        "https://swarm-official.online",
        "http://127.0.0.1:5173",
      ],
      methods: ["PUT", "POST", "DELETE", "GET", "PATCH"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(" connected to socket.io ");

    socket.on("setup", (userData) => {
      socket.join(userData.userId);
      socket.emit("connected");
    });

    socket.on("joinChat", (room) => {
      socket.join(room);      
      value = room ;
      console.log("user joined room " + room);
    });

    socket.on("newMessage", (data) => {
      console.log("insedie sock",data);
      
      socket.to(data.chatId).emit("rm",data) ;           
    });

    // socket.on("disconnect", () => {
    //   console.log("user disconnected", socket.id);
    // });
  });
};
export default socketConfig;