import { DECREMENT, FAILURE, INCREMENT, POST_ORDER, REMOVE, REQUEST, SUCCESS } from '../constants';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null
};

export default produce((draft = initialState, action) => {
  const { type, id, data } = action;
  switch (type) {
    case INCREMENT:
      draft.entities = { ...draft.entities, [id]: (draft.entities[id] || 0) + 1 };
      break;
    case DECREMENT:
      draft.entities = { ...draft.entities, [id]: draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0 };
      break;
    case REMOVE:
      draft.entities = { ...draft.entities, [id]: 0 };
      break;
    case POST_ORDER + REQUEST: {
      draft.error = null;
      draft.loading = true;
      break;
    }
    case POST_ORDER + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      draft.entities = {};
      break;
    }
    case POST_ORDER + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = data;
      break;
    }
    default:
      return draft;
  }
});
