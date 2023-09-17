
const userResolvers = {
  Query: {
    getUser: async (_, { id }, { dataSources }) => {
      return await dataSources.userAPI.getUser(id);
    },
    getUsers: async (_, __, { dataSources }) => {
      return await dataSources.userAPI.getUsers();
    },
  },
  Mutation: {
    createUser: async (_, { input }, { dataSources }) => {
      return await dataSources.userAPI.createUser(input);
    },
    updateUser: async (_, { id, input }, { dataSources }) => {
      return await dataSources.userAPI.updateUser(id, input);
    },
    deleteUser: async (_, { id }, { dataSources }) => {
      return await dataSources.userAPI.deleteUser(id);
    },
  },
};

module.exports = userResolvers;
