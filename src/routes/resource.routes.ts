import express from "express";
import db from "../config";
import { Resource } from "../models/resource.model";

const router = express.Router();

// Create a new resource
router.post("/add", async (req, res) => {
  try {
    const { name, type, description, quantity, availability_status } = req.body;

    const newResource = await db.one(
      "INSERT INTO resources (name, type, description, quantity, availability_status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, type, description, quantity, availability_status]
    );

    res.status(201).json({ message: "Resource added successfully!", resource: newResource });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get all resources
router.get("/", async (req, res) => {
  try {
    const resources = await db.any("SELECT * FROM resources ORDER BY name ASC");
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get a single resource by ID
router.get("/:id", async (req, res) => {
  try {
    const resource = await db.oneOrNone("SELECT * FROM resources WHERE id = $1", [req.params.id]);

    if (!resource) return res.status(404).json({ message: "Resource not found" });

    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Update a resource
router.put("/:id", async (req, res) => {
  try {
    const { name, type, description, quantity, availability_status } = req.body;

    const updatedResource = await db.oneOrNone(
      "UPDATE resources SET name=$1, type=$2, description=$3, quantity=$4, availability_status=$5 WHERE id=$6 RETURNING *",
      [name, type, description, quantity, availability_status, req.params.id]
    );

    if (!updatedResource) return res.status(404).json({ message: "Resource not found" });

    res.status(200).json({ message: "Resource updated successfully", updatedResource });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Delete a resource
router.delete("/:id", async (req, res) => {
  try {
    const deletedResource = await db.oneOrNone("DELETE FROM resources WHERE id=$1 RETURNING *", [req.params.id]);

    if (!deletedResource) return res.status(404).json({ message: "Resource not found" });

    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
