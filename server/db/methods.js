const Book = require('../models/book');
const Author = require('../models/author');

module.exports = {
  getAllBooks: async (condition) =>
    condition ? await Book.find(condition) : await Book.find({}),
  getBook: async (id) => await Book.findById(id),
  getAllAuthors: async () => await Author.find({}),
  getAuthor: async (id) => await Author.findById(id),

  createBook: async (payload) => await Book.create(payload),
  createAuthor: async (payload) => await Author.create(payload),
};
