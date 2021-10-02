import produce from 'immer';

import { ADD_REVIEW } from '../constants';
import { LOAD_USERS,
         SUCCESS,
        FAILURE,
        REQUEST}  from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null
};
export default produce((draft = initialState, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      draft.loaded = false;
      draft.loading = true;
      return draft;
    case LOAD_USERS + SUCCESS:
      const entities = arrToMap(data);
      draft.loaded = true;
      draft.loading = false;
      draft.entities = entities;
      return draft;
    case LOAD_USERS + FAILURE:
      draft.error = error;
      draft.loaded = false;
      draft.loading = false;
      return draft;
    case ADD_REVIEW:
      const { name } = review;
      draft.entities[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
