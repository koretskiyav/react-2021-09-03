import { DECREMENT, INCREMENT, REMOVE, ADDREVIEW, ADDUSER, ADDREVIEWTORESTAURANT } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const addReview = ({restaurantId, name, text, rating}) => ({ type: ADDREVIEW, restaurantId, name, text, rating });
export const addUser = ({name}) => ({type: ADDUSER, name});
export const addReviewToRestaurant = (restaurantId, reviewId) => ({type: ADDREVIEWTORESTAURANT, restaurantId, reviewId});
