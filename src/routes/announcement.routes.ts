import express from "express";
import db from "../config";
import { Announcement } from "../models/announcement.model";

const router = express.Router();

// Create a new announcement
router.post("/add", async (req, res) => {
  try {
    const { title, content, date, priority } = req.body;
    
    const newAnnouncement = await db.one(
      "INSERT INTO announcements (title, content, date, priority) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, content, date, priority]
    );

    res.status(201).json({ message: "Announcement created successfully!", announcement: newAnnouncement });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all announcements
router.get("/", async (req, res) => {
  try {
    const announcements = await db.any("SELECT * FROM announcements ORDER BY date DESC");
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get a single announcement by ID
router.get("/:id", async (req, res) => {
  try {
    const announcement = await db.oneOrNone("SELECT * FROM announcements WHERE id = $1", [req.params.id]);

    if (!announcement) return res.status(404).json({ message: "Not found" });

    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Update an announcement
router.put("/:id", async (req, res) => {
  try {
    const { title, content, date, priority } = req.body;

    const updatedAnnouncement = await db.oneOrNone(
      "UPDATE announcements SET title=$1, content=$2, date=$3, priority=$4 WHERE id=$5 RETURNING *",
      [title, content, date, priority, req.params.id]
    );

    if (!updatedAnnouncement) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Announcement updated successfully", updatedAnnouncement });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Delete an announcement
router.delete("/:id", async (req, res) => {
  try {
    const deletedAnnouncement = await db.oneOrNone("DELETE FROM announcements WHERE id=$1 RETURNING *", [req.params.id]);

    if (!deletedAnnouncement) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
