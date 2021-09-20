import { DECREMENT, INCREMENT, REMOVE, ADD_USER, ADD_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });


export const addUser = (newUser) => ({ type: ADD_USER, newUser });
export const addReview = (newReview) => ({ type: ADD_REVIEW, newReview });
