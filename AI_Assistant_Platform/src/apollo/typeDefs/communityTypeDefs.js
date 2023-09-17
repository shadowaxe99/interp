
const { gql } = require('apollo-server-express');

const communityTypeDefs = gql`
  type Community {
    id: ID!
    name: String!
    description: String
    members: [User!]!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    content: String!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    content: String!
    author: User!
  }

  extend type Query {
    community(id: ID!): Community
    communities: [Community!]!
  }

  extend type Mutation {
    createCommunity(name: String!, description: String): Community
    createPost(communityId: ID!, content: String!): Post
    createComment(postId: ID!, content: String!): Comment
  }
`;

module.exports = communityTypeDefs;
