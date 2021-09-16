import { DECREMENT, INCREMENT} from '../constants';
import { restaurants } from '../../fixtures';

export default function (state = {}, action) {
  const { type, id } = action;
  const getProduct = (id) => {
    if (!state[id]) 
      return [].concat(...restaurants.map((item) => item.menu)).find((product)=>product.id === id);
    else
      return state[id];
  }

  switch (type) {
    case INCREMENT:
      return { ...state, [id]: getProduct(id)};
    case DECREMENT:
      return { ...state, [id]: getProduct(id)};
    default:
      return state;
  }
}
