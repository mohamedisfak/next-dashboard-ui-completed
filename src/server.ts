import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config";
import announcementRoutes from "./routes/announcement.routes";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/announcements", announcementRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
