
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './userReducer';
import aiReducer from './aiReducer';
import transactionReducer from './transactionReducer';
import communityReducer from './communityReducer';

const rootReducer = combineReducers({
  user: userReducer,
  ai: aiReducer,
  transaction: transactionReducer,
  community: communityReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
