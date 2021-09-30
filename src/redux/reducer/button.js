import produce from 'immer';
import {} from '../actions';

import {SEND_ORDER, REQUEST, SUCCESS, FAILURE} from '../constants';
const initialState = {
  busy: false
}

export default produce((draft = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SEND_ORDER + REQUEST:
      draft.busy = true;
      break;
    case SEND_ORDER + SUCCESS:
      draft.busy = false;
      break;
    case SEND_ORDER + FAILURE:
      draft.busy = false;
      break;
    default:
      return draft;
  }

})