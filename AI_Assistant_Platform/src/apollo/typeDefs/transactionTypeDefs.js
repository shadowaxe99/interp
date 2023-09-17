
const { gql } = require('apollo-server-express');

const transactionTypeDefs = gql`
  type Transaction {
    id: ID!
    user: User!
    amount: Float!
    date: String!
    status: String!
  }

  extend type Query {
    getTransaction(id: ID!): Transaction
    getTransactions: [Transaction]
  }

  extend type Mutation {
    createTransaction(user: ID!, amount: Float!): Transaction
    updateTransaction(id: ID!, status: String!): Transaction
    deleteTransaction(id: ID!): Transaction
  }
`;

module.exports = transactionTypeDefs;
