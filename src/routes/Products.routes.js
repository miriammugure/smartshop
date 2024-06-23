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
router.post("/", async (req, res) => {
  const productthumbnail = req.body.productthumbnail;
  const producttitle = req.body.producttitle;
  const productdescription = req.body.productdescription;
  const productcost = req.body.productcost;
  const onoffer = req.body.onoffer;
  if (!productthumbnail)
    return res
      .status(400)
      .json({ success: false, message: "Product thumbnail field is required" });
  if (!producttitle)
    return res
      .status(400)
      .json({ success: false, message: "Product title field is required" });
  if (!productdescription)
    return res.status(400).json({
      success: false,
      message: "Product description field is required",
    });
  if (!productcost)
    return res
      .status(400)
      .json({ success: false, message: "Product cost field is required" });
  if (!onoffer)
    return res
      .status(400)
      .json({ success: false, message: "Onoffer field is required" });
  try {
    const result = await pool.query(
      "INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        productthumbnail,
        producttitle,
        productdescription,
        productcost,
        onoffer,
      ],
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  const {
    productthumbnail,
    producttitle,
    productdescription,
    productcost,
    onoffer,
  } = req.body;
  const id = req.params.id;

  try {
    let updateProduct;
    if (productthumbnail) {
      updateProduct = await pool.query(
        "UPDATE Products SET productthumbnail=$1 WHERE id=$2",
        [productthumbnail, id],
      );
    }
    if (producttitle) {
      updateProduct = await pool.query(
        "UPDATE Products SET producttitle=$1 WHERE id=$2",
        [producttitle, id],
      );
    }
    if (productdescription) {
      updateProduct = await pool.query(
        "UPDATE Products SET productdescription=$1 WHERE id=$2",
        [productdescription, id],
      );
    }
    if (productcost) {
      updateProduct = await pool.query(
        "UPDATE Products SET productcost=$1 WHERE id=$2",
        [productcost, id],
      );
    }
    if (onoffer) {
      updateProduct = await pool.query(
        "UPDATE Products SET onoffer=$1 WHERE id=$2",
        [onoffer, id],
      );
    }

    res.json(updateProduct);
  } catch (error) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
