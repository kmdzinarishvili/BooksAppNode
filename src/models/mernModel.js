import mongoose from "mongoose";
const Schema = mongoose.Schema;
export const BookSchema = new Schema({
  title: {
    type: String,
    required: "Enter title",
  },
  author: {
    type: String,
    // required: "Enter author",
  },
  publicationYear: {
    type: Number,
  },
  averageRating: {
    type: Number,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});
