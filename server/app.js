const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/typeDef');
const resolvers = require('./resolver/resolver');
const port = 3000 || process.env.PORT;

(async function () {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen(port, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
  return { server, app };
})();
