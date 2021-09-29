import { DECREMENT, INCREMENT, REMOVE, CHECKOUT, REQUEST, SUCCESS, FAILURE } from '../constants';
import produce from 'immer';
// { [productId]: amount }

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};


export default produce((draft = initialState, action) => {
  const { type, id, error } = action;

  switch (type) {
    case INCREMENT:
      draft.error = null;
      draft.loading = false;
      draft.loaded = false;
      draft.entities = { ...draft.entities, [id]: (draft.entities[id] || 0) + 1 };
      break;
    case DECREMENT:
      draft.error = null;
      draft.loading = false;
      draft.loaded = false;
      draft.entities = { ...draft.entities, [id]: draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0 };
      break;
    case REMOVE:
      draft.error = null;
      draft.loading = false;
      draft.loaded = false;
      draft.entities = { ...draft.entities, [id]: 0 };
      break;
    case CHECKOUT + REQUEST:
      draft.error = null;
      draft.loading = true;
      draft.loaded = false;
      break;
    case CHECKOUT + SUCCESS:
      draft.loading = false;
      draft.loaded = true;
      draft.entities = {};
      break;
    case CHECKOUT + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});
