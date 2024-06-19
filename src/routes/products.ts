import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getSingleProduct,
  getlatestProduct,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

app.post("/new", adminOnly, singleUpload, newProduct);

app.get("/latest", getlatestProduct);

app.get("/all", getAllProducts);

app.get("/categories", getAllCategories);

app.get("/admin-products", getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly,singleUpload, updateProduct)
  .delete(adminOnly,deleteProduct);

export default app;
