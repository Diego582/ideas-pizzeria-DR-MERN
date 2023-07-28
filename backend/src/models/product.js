import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  nombre: String,
  description: String,
  precio: Number,
  quantity: Number,
  category: String,
  image: String
});

export default mongoose.model("Product", ProductSchema, "products");