const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  commentText: { type: String, max: 1000 },
});

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    postText: { type: String, max: 1000 },
    postimg: { type: String },
    likes: { type: Array, default: [] },
    dislikes: { type: Array, default: [] },
    comment:[CommentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
