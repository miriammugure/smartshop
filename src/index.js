import express from "express";
import productsRoutes from "./routes/Products.routes.js";
const app = express();
app.use(express.json());
app.use("/Products", productsRoutes);

app.get("/Products", (req, res) => {
  res.send("You have hit the home endpoint");
});
app.listen(3000, () => {
  console.log("Application running on port 3000");
});
