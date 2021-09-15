
import { INCREMENT, DECREMENT } from './constants';

export const decrement = (id) => ({type: DECREMENT, id});
export const increment = (id) => ({type: INCREMENT, id});