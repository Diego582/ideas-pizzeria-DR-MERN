import mongoose from "mongoose";
import UserSchema from "./user.js"

export const CommentSchema = new mongoose.Schema({
    user: UserSchema,
    description: String,
    score: Number,
});

export default mongoose.model("Comment", CommentSchema, "comments");