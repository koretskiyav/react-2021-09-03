import { ADD_USER, ADD_REVIEW, ADD_RESTAURANT, PROCESS_NEW_REVIEW } from "../constants";
import { restaurantSelector } from '../selectors';
import { v4 as uuidv4 } from 'uuid';


const middlewareWorkers = {
  [PROCESS_NEW_REVIEW]: (state, dispatch, params) => {

    const { name, rating, text, restaurantId } = params;

    const newUserId = uuidv4();
    dispatch({ type: ADD_USER, user: { id: newUserId, name } });

    const newReviewId = uuidv4();
    dispatch({ type: ADD_REVIEW, review: { id: newReviewId, userId: newUserId, text, rating } });

    const restaurant = { ...restaurantSelector(state, restaurantId) };
    restaurant.reviews = [...restaurant.reviews, newReviewId];
    dispatch({ type: ADD_RESTAURANT, restaurant });

  }
}

export default (store) => (next) => (action) => {
  const { type, payload } = action;
  if (type in middlewareWorkers) {
    middlewareWorkers[type](store.getState(), store.dispatch, payload);
  } else {
    next(action);
  }
};



