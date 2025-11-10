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


router.get("/my", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ msg: "Email is required" });
    }

    const userBooks = await Book.find({ userEmail: email }).sort({ createdAt: -1 });
    res.json(userBooks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userEmail, ...updateData } = req.body;

    if (!userEmail) {
      return res.status(400).json({ msg: "userEmail is required" });
    }

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    if (book.userEmail !== userEmail) {
      return res.status(403).json({ msg: "Not authorized to update this book" });
    }

    Object.assign(book, updateData);
    const updatedBook = await book.save();

    res.json(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json({ msg: "userEmail is required" });
    }

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    if (book.userEmail !== userEmail) {
      return res.status(403).json({ msg: "Not authorized to delete this book" });
    }

    await Book.findByIdAndDelete(id);
    res.json({ msg: "Book deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

//porweshell test
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



// bash test
// curl -X PUT http://localhost:5000/api/books/6910e8a279692f7f509975c8 \
//   -H "Content-Type: application/json" \
//   -d '{
//     "userEmail": "test@example.com",
//     "title": "The Hobbit (Updated)",
//     "rating": 4,
//     "summary": "An epic adventure with dragons and treasure."
//   }'


// curl -X DELETE http://localhost:5000/api/books/6910e8a279692f7f509975c8 \
//   -H "Content-Type: application/json" \
//   -d '{
//     "userEmail": "test@example.com"
//   }'