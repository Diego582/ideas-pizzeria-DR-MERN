import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: String,
  nombre: String,
  apellido: String,
  fechaNacimiento: String,
  password: String,
  image: String
});

export default mongoose.model("User", UserSchema, "users");