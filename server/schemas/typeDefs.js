// import the gql tagged template function
const { gql } = require("apollo-server-express");

// typeDefs
const typeDefs = gql`
type Book {
  bookId: ID!
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type User {
  id: ID!
  name: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

input savedBook {
  description: String
  title: String
  bookId: String
  image: String
  link: String
  authors: [String]
}

  type Query {
    me: [User]
  }
  

  type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String ): User 
    removeBook(bookID: ID!): User
  }

  type Auth {
    token: ID
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
