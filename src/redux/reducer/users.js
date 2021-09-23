import produce from 'immer';

import { ADD_REVIEW, LOAD_USERS, REQUEST, FAILURE, SUCCESS, } from '../constants';
import { arrToMap } from '../utils';


const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      draft.entities[userId] = { id: userId, name };
      break;

    case LOAD_USERS + REQUEST:
      draft.loading = true;
      draft.loaded = false;
      draft.error = null;
      break;

    case LOAD_USERS + SUCCESS:
      draft.entities = arrToMap(data);
      draft.loading = false;
      draft.loaded = true;
      draft.error = null;
      break;
    case LOAD_USERS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});


