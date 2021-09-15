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