import { DECREMENT, DELETE_ACTION, INCREMENT } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const deleteAction = (id) => ({ type: DELETE_ACTION, id });
