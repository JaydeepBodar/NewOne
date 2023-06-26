import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  url: { type: String, require: true },
  user: { type: Number, require: true, unique: true },
  id: { type: Number, require: true },
});
export default mongoose.models.Post || mongoose.model("Post", postSchema);
