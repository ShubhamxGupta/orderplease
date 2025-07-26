import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

// User joins their own room by userId
io.on("connection", (socket) => {
    socket.on("join", (userId) => {
        socket.join(userId);
    });
});

// REST endpoint for admin to emit order status updates
app.use(express.json());
app.post("/notify", (req, res) => {
    const { userId, orderId, status } = req.body;
    if (!userId || !orderId || !status)
        return res.status(400).json({ message: "Missing fields" });
    io.to(userId).emit("orderStatusUpdate", { orderId, status });
    res.json({ message: "Notification sent" });
});

const PORT = process.env.SOCKET_PORT || 4000;
server.listen(PORT, () => {
    console.log(`Socket.io server running on port ${PORT}`);
});
