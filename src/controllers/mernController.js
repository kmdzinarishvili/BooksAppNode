import mongoose from "mongoose";
import { BookSchema } from "../models/mernModel";
const Book = mongoose.model("Books", BookSchema);
export const addNewBook = (req, res) => {
  console.log(req.body);
  let newBook = new Book(req.body);

  newBook.save((err, book) => {
    console.log(err, book);
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

export const getBooks = (req, res) => {
  Book.find({}, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};

export const getBookWithID = (req, res) => {
  Book.findById(req.params.bookID, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};
export const updateBook = (req, res) => {
  Book.findOneAndUpdate(
    { _id: req.params.bookID },
    req.body,
    {
      new: true,
      useFindAndModify: false,
    },
    (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json(book);
    }
  );
};

export const deleteBook = (req, res) => {
  Book.deleteOne({ _id: req.params.donationID }, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfully deleted book" });
  });
};
