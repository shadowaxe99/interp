
const communityResolvers = {
  Query: {
    getCommunityPosts: async (_, __, { dataSources }) => {
      return dataSources.communityAPI.getPosts();
    },
  },

  Mutation: {
    createPost: async (_, { postInput }, { dataSources }) => {
      return dataSources.communityAPI.createPost(postInput);
    },

    deletePost: async (_, { postId }, { dataSources }) => {
      return dataSources.communityAPI.deletePost(postId);
    },

    updatePost: async (_, { postId, postInput }, { dataSources }) => {
      return dataSources.communityAPI.updatePost(postId, postInput);
    },
  },
};

module.exports = communityResolvers;
