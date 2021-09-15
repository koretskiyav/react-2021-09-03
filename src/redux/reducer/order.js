<<<<<<< HEAD
import { INCREMENT, DECREMENT } from '../constants';

export default function(amount = 0, action) {
  switch (action.type) {
    case (INCREMENT):
      return amount + 1;
    case (DECREMENT):
      return amount - 1;
    default:
      return amount;
  }
}
=======
import { DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    default:
      return state;
  }
}
>>>>>>> 6a6ece76ab0d804613281ec6820a1be74a053129
