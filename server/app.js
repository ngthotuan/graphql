const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/typeDef');
const resolvers = require('./resolver/resolver');
const { connect, methods } = require('./db');
const port = 4000 || process.env.PORT;

connect();

(async function () {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ methods }),
    });
    await server.start();

    server.applyMiddleware({ app });

    await new Promise((resolve) => app.listen(port, resolve));
    console.log(
        `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
    return { server, app };
})();
