import { ADD_REVIEW,
        LOAD_REVIEWS,
        CHANGE_RESTAURANT,
        SUCCESS,
        REQUEST,
        FAILURE } from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';


const initialState = {
  loaded: false,
  loading: false,
  entities: {}
};
export default (state = initialState, action) => {
  const { type, review, reviewId, userId, restId, data } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loaded: false,
        loading: true
      }
    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities[restId] = arrToMap(data);
        draft.loaded = true;
        draft.loading = false;
      });
    case CHANGE_RESTAURANT:
      return {
        ...state,
        loaded: false,
        loading: false
      }
    default:
      return state;
  }
};
