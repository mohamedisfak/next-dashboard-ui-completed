import express from "express";
import db from "../config";
import { Event } from "../models/event.model";

const router = express.Router();

// Create a new event
router.post("/add", async (req, res) => {
  try {
    const { title, description, date, time, location, category } = req.body;

    const newEvent = await db.one(
      "INSERT INTO events (title, description, date, time, location, category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, description, date, time, location, category]
    );

    res.status(201).json({ message: "Event created successfully!", event: newEvent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await db.any("SELECT * FROM events ORDER BY date ASC");
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get a single event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await db.oneOrNone("SELECT * FROM events WHERE id = $1", [req.params.id]);

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Update an event
router.put("/:id", async (req, res) => {
  try {
    const { title, description, date, time, location, category } = req.body;

    const updatedEvent = await db.oneOrNone(
      "UPDATE events SET title=$1, description=$2, date=$3, time=$4, location=$5, category=$6 WHERE id=$7 RETURNING *",
      [title, description, date, time, location, category, req.params.id]
    );

    if (!updatedEvent) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event updated successfully", updatedEvent });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Delete an event
router.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await db.oneOrNone("DELETE FROM events WHERE id=$1 RETURNING *", [req.params.id]);

    if (!deletedEvent) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
