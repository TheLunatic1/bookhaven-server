const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  userName: String,
  photoURL: String,
  createdAt: { type: Date, default: Date.now },
});

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    summary: { type: String, required: true },
    coverImage: { type: String, required: true },
    userEmail: { type: String, required: true },
    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);