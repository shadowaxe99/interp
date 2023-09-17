
import { AI_ACTIONS } from '../actions/aiActions';

const initialState = {
  aiData: [],
  loading: false,
  error: null,
};

const aiReducer = (state = initialState, action) => {
  switch (action.type) {
    case AI_ACTIONS.FETCH_AI_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AI_ACTIONS.FETCH_AI_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        aiData: action.payload.data,
      };
    case AI_ACTIONS.FETCH_AI_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        aiData: [],
      };
    default:
      return state;
  }
};

export default aiReducer;
