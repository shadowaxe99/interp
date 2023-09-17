
const { gql } = require('apollo-server-express');

const aiTypeDefs = gql`
  type AI {
    id: ID!
    name: String!
    description: String!
    functionality: [Functionality!]!
  }

  type Functionality {
    id: ID!
    name: String!
    description: String!
  }

  extend type Query {
    getAI(id: ID!): AI
    getAllAI: [AI!]!
  }

  extend type Mutation {
    createAI(name: String!, description: String!, functionality: [FunctionalityInput!]!): AI!
    updateAI(id: ID!, name: String, description: String, functionality: [FunctionalityInput]): AI!
    deleteAI(id: ID!): AI!
  }

  input FunctionalityInput {
    name: String!
    description: String!
  }
`;

module.exports = aiTypeDefs;
