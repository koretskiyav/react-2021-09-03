<<<<<<< HEAD

import { INCREMENT, DECREMENT } from './constants';

export const decrement = (id) => ({type: DECREMENT, id});
export const increment = (id) => ({type: INCREMENT, id});
=======
import { DECREMENT, INCREMENT } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
>>>>>>> 6a6ece76ab0d804613281ec6820a1be74a053129
