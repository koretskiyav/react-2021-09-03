import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import adder_reviews from './middleware/adder_reviews';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(adder_reviews))
);
