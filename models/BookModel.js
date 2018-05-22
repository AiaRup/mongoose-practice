const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: Number
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;