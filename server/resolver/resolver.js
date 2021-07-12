const { books, authors } = require('../static/data');

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },

  Book: {
    author: (parent, args) => authors.find((author) => author.id === parent.authorId),
  },

  Author: {
    books: (parent, args) =>
      books.filter((book) => book.authorId === parent.id),
  },

  Mutation: {
    createBook: (parent, args) => {
      const book = { ...args };
      book.id = books.length + 1;
      books.push(book);
      return book;
    },
    createAuthor: (parent, args) => {
		const author = { ...args };
		author.id = authors.length + 1;
		authors.push(author);
		return author;
	},
  },
};

module.exports = resolvers;
