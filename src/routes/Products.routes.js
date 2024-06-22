import { Router } from "express";
import pool from "./db.config.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const Result = await pool.query("SELECT * FROM Products");
    res.json(Result.rows);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const Result = await pool.query("SELECT * FROM Products WHERE id=$1", [id]);
    if (Result.rowCount === 0) {
      res.status(404).json({ success: false, message: "User not found" });
    } else {
      res.status(200).json({ success: true, data: Result.rows });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deleteProduct = await pool.query("DELETE FROM Products WHERE id=$1", [
      id,
    ]);
    if (deleteProduct.rowCount === 1) {
      res
        .status(200)
        .json({ success: true, message: "User Deleted Successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid User" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
