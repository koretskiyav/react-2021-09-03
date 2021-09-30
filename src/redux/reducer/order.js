import { CREATE_ORDER, DECREMENT, FAILURE, INCREMENT, REMOVE, REQUEST, SUCCESS } from '../constants';
import produce from 'immer';

const defaultState = {
  items: {},
  pending: false
}

export default produce((state = defaultState, action) => {
  const { type, id } = action;
    switch (type) {
     case INCREMENT:
       state.items[id] = (state.items[id] || 0) + 1;
      break;
      case DECREMENT:
       state.items[id] = state.items[id] > 0 ? (state.items[id] || 0) - 1 : 0;
      break;
     case REMOVE:
       state.items[id] = 0;
      break;
      case CREATE_ORDER + REQUEST:
        state.pending = true;
      break;
      case CREATE_ORDER + SUCCESS:
        state.items = {};
      case CREATE_ORDER + FAILURE:
        state.pending = false;
      break;

      default:
       return state;
    }
  }
)