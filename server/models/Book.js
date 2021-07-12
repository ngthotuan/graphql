const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: { type: String, require: true },
  genre: { type: String, require: true },
  authorId: { type: String, require: true },
});

const book = mongoose.model('Book', BookSchema);
module.exports = book;
