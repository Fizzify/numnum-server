import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { generatePairs } from "../util/num";

const PORT = process.env.PORT || 3001;

const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5500",
      "https://numnum-alpha.vercel.app",
    ],
  },
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

io.on("connection", async (socket) => {
  socket.on("join", (roomId) => {
    if (io.sockets.adapter.rooms.get(roomId)) {
      socket.join(roomId);
      socket.emit("join-success", roomId);

      io.to(roomId).emit("player-join");
    } else {
      socket.join(roomId);
      socket.emit("join-success");
    }
  });

  socket.on("start-game", (roomId) => {
    const pairs = generatePairs(10);
    io.to(roomId).emit("generate-pairs", pairs);
  });

  socket.on("end-game", (roomId) => {
    io.to(roomId).emit("decide-game", socket.id);
  });

  socket.on("solve-problem", (roomId, userId, monsterHealthLeft) => {
    io.to(roomId).emit("damage-monster", userId, monsterHealthLeft);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
