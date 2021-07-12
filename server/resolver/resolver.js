const resolvers = {
  Query: {
    books: async (parent, args, { methods }) => await methods.getAllBooks(),
    book: async (parent, args, { methods }) => await methods.getBook(args.id),
    authors: async (parent, args, { methods }) => await methods.getAllAuthors(),
    author: async (parent, args, { methods }) =>
      await methods.getAuthor(args.id),
  },

  Book: {
    author: async (parent, args, { methods }) =>
      methods.getAuthor(parent.authorId),
  },

  Author: {
    books: async (parent, args, { methods }) =>
      methods.getAllBooks({ authorId: parent.id }),
  },

  Mutation: {
    createBook: async (parent, args, { methods }) =>
      await methods.createBook(args),
    createAuthor: async (parent, args, { methods }) =>
      await methods.createAuthor(args),
  },
};

module.exports = resolvers;
