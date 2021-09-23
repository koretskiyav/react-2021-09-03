import produce from 'immer';
import {
  ADD_REVIEW,
  CHANGE_RESTAURANT,
  FAILURE,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
} from '../constants';

const initialState = {
  activeId: null,
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, restId, reviewId, activeId, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      draft.loading = true;
      draft.loaded = false;
      draft.error = null;
      break;
    case LOAD_RESTAURANTS + SUCCESS:
      draft.activeId = data[0].id;
      draft.loading = false;
      draft.loaded = true;
      data.map((item) => draft.entities[item.id] = item);
      break;
    case LOAD_RESTAURANTS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    case CHANGE_RESTAURANT:
      draft.activeId = activeId;
      break;
    case ADD_REVIEW:
      draft.entities[restId].reviews.push(reviewId);
      break;
    default:
      return draft;
  }
});
