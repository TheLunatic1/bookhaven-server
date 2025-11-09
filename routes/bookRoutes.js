const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});
router.get("/latest", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).limit(6);
    res.json(books);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});



router.post("/", async (req, res) => {
  try {
    const { title, author, genre, rating, summary, coverImage, userEmail } = req.body;

    // validation
    if (!title || !author || !genre || !rating || !summary || !coverImage || !userEmail) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newBook = new Book({
      title,
      author,
      genre,
      rating: Number(rating),
      summary,
      coverImage,
      userEmail,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});



module.exports = router;


// curl -Method POST http://localhost:5000/api/books `
//   -Headers @{"Content-Type"="application/json"} `
//   -Body '{
//     "title": "The Hobbit",
//     "author": "J.R.R. Tolkien",
//     "genre": "Fantasy",
//     "rating": 5,
//     "summary": "A hobbit goes on an adventure.",
//     "coverImage": "https://images.example.com/hobbit.jpg",
//     "userEmail": "test@example.com"
//   }'
