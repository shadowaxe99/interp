
import { FETCH_COMMUNITY, POST_COMMUNITY } from '../actions/types';

const initialState = {
  communityPosts: [],
};

const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMUNITY:
      return {
        ...state,
        communityPosts: action.payload,
      };
    case POST_COMMUNITY:
      return {
        ...state,
        communityPosts: [action.payload, ...state.communityPosts],
      };
    default:
      return state;
  }
};

export default communityReducer;
