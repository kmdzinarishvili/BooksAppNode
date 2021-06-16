import mongoose from "mongoose";
const Schema = mongoose.Schema;
export const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: "Enter author",
  },
  photoURL: {
    type: String,
    required: "Enter photoURL",
  },
  description: {
    type: String,
  },
  publicationYear: {
    type: Number,
  },
  averageRating: {
    type: Number,
  },
  //add page number
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});
