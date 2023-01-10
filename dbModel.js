import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  songs: String,
  likes: String,
  message: String,
  des: String,
  shares: String,
});
export default mongoose.model('tiktokVideos', tiktokSchema)