import mongoose from "mongoose";
import { BookSchema } from "../models/mernModel";
const Book = mongoose.model("Books", BookSchema);
export const addNewBook = (req, res) => {
  let newBook = new Book(req.body);
  newBook.save((err, book) => {
    console.log(err, book);
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
};
