import { INCREMENT, REMOVE, PLACE_ORDER, REQUEST, SUCCESS, FAILURE } from '../constants';
import produce from 'immer';

const defaultState = {
 entities: {},
 loading: false
}
// { [productId]: amount }
export default function (state = defaultState, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return produce(state, (draft)=> {
      draft.entities[id] = (draft.entities[id] || 0) + 1;
      });
      return produce(state, (draft) => {
        draft.entities[id] = (draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0)
      });
    case REMOVE:
      return produce(state, (draft) => {
        draft.entities[id] = 0;
      });
    case PLACE_ORDER + REQUEST:
      return {...state, loading: true}
    case PLACE_ORDER + SUCCESS:
      return {...state, entities:{}, loading: false}
    case PLACE_ORDER + FAILURE:
      return {...state, loading: false}
    default:
      return state;
  }
}
