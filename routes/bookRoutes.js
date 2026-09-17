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


//comment
router.post("/:id/comment", async (req, res) => {
  try {
  const { id } = req.params;
  const { text, userName, photoURL, userEmail } = req.body;

  if (!text || !userEmail) {
    return res.status(400).json({ msg: "Comment text and userEmail are required" });
  }

  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }

  const newComment = {
    text,
    userName: userName || "Anonymous",
    photoURL: photoURL || null,
    userEmail
  };

  book.comments.push(newComment);
  const updatedBook = await book.save();

  const addedComment = updatedBook.comments[updatedBook.comments.length - 1];

  res.status(201).json(addedComment);
  } catch (err) {
  console.error(err);
  res.status(500).json({ msg: "Server error" });
  }
});


//debug book details -- book not found case
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
