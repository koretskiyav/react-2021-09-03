import produce from 'immer';
import { DECREMENT, INCREMENT, REMOVE, SEND_ORDER, SUCCESS, FAILURE} from '../constants';

const initialState = {
  data: {},
  error: null
}

export default produce((draft = initialState, action) => {
  const { type, id, error} = action;

  switch (type) {
    case INCREMENT:
      draft.data[id] = (draft.data[id] || 0) + 1;
      break;
    case DECREMENT:
      draft.data[id] = draft.data[id] > 0 ? (draft.data[id] || 0) - 1 : 0;
      break;
    case REMOVE:
      draft.data[id] = 0;
      break;
    case SEND_ORDER + SUCCESS:
      draft.data = {}
      break;
    case SEND_ORDER + FAILURE:
      draft.error = error;
      break;
    default:
      return draft;
  }
});