
const transactionResolvers = {
  Query: {
    getTransactions: async (_, { userId }, { dataSources }) => {
      return await dataSources.transactionAPI.getTransactionsByUser(userId);
    },
  },
  Mutation: {
    createTransaction: async (_, { userId, transactionDetails }, { dataSources }) => {
      return await dataSources.transactionAPI.createTransaction(userId, transactionDetails);
    },
    updateTransaction: async (_, { transactionId, transactionDetails }, { dataSources }) => {
      return await dataSources.transactionAPI.updateTransaction(transactionId, transactionDetails);
    },
    deleteTransaction: async (_, { transactionId }, { dataSources }) => {
      return await dataSources.transactionAPI.deleteTransaction(transactionId);
    },
  },
};

module.exports = transactionResolvers;
