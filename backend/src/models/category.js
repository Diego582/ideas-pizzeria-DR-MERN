import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
  nombre: String,
  description: String
});

export default mongoose.model("Category", CategorySchema, "categories");