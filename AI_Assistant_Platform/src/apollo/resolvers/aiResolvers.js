
const aiResolvers = {
  Query: {
    getAIResponse: async (_, { input }, { dataSources }) => {
      return await dataSources.aiAPI.getAIResponse(input);
    },
  },
  Mutation: {
    updateAIModel: async (_, { modelData }, { dataSources }) => {
      return await dataSources.aiAPI.updateAIModel(modelData);
    },
  },
};

module.exports = aiResolvers;
