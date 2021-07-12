const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: { type: String, require: true },
  age: { type: Number, require: true },
});

const author = mongoose.model('Author', AuthorSchema);
module.exports = author;
