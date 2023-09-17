
import { CREATE_TRANSACTION, GET_TRANSACTIONS } from '../types';

export const createTransaction = (transactionData) => {
  return {
    type: CREATE_TRANSACTION,
    payload: transactionData,
  };
};

export const getTransactions = () => {
  return {
    type: GET_TRANSACTIONS,
  };
};
