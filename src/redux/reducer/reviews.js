import produce from 'immer';

import { ADD_REVIEW, LOAD_REVIEWS, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  loaded: {},
  loading: false,
  error: null,
  entities: {}
}

export default produce((draft = initialState, action) => {
  const { type, review, reviewId, restId, userId, error, data } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      draft.entities[reviewId] ={ id: reviewId, userId, text, rating };
      break;
    case LOAD_REVIEWS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.loading = false;
      draft.loaded[restId] = true ;
      data.map(item => draft.entities[item.id] = item);
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading = false;
      draft.loaded[restId] = false ;
      draft.error = error;
      break;
    default:
      return draft;
    };
  });