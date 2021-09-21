import { ADDREVIEW, DECREMENT, INCREMENT, REMOVE } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addReview = (values, restaurantId) => ({type: ADDREVIEW, values,restaurantId})
