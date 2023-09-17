
import { CREATE_TRANSACTION, GET_TRANSACTIONS } from '../actions/transactionActions';

const initialState = {
  transactions: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case CREATE_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default transactionReducer;
