import { DECREMENT, INCREMENT, REMOVEITEM } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, product } = action;
  const id = product ? product.id : undefined;

  const prod = () => {
    return ({
      id: product.id,
      name: product.name,
      price: product.price
    })
  };  

  switch (type) {
    case INCREMENT:
      return { ...state, [id]: {...prod(), count: (state[id] ? state[id].count : 0) + 1} };
    case DECREMENT:
      if (!state[id] || !state[id].count || state[id].count <=0) {
        return state
      }
      return { ...state, [id]: {...prod(), count: (state[id] ? state[id].count : 0) - 1} };
    case REMOVEITEM:
      return { ...state, [id]: {...prod(), count: 0}};
    default:
      return state;
  }
}
