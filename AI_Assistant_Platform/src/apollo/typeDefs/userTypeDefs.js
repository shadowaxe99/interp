
const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    profilePicture: String
    bio: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, username: String, email: String, password: String, profilePicture: String, bio: String): User
    deleteUser(id: ID!): User
  }
`;

module.exports = userTypeDefs;
