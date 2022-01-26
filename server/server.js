const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');


// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3002;

const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const apolloServer = new ApolloServer({
    typeDefs, 
    resolvers,
    introspection: true,
    playground: true,
    context: authMiddleware,
  });

  // integrate our Apollo server with the Express application as middleware
  apolloServer.applyMiddleware({ app });

};
  
  // Initialize the Apollo server
  startServer();
  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if  in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build', 'index.html')));
}

app.use(routes);


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${graphql}`);
  });
});