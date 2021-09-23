import { ADD_REVIEW, CHANGE_RESTAURANT, FAILURE, LOAD_REVIEWS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, data, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      state.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: {...state.entities, ...arrToMap(data)},
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };
    case CHANGE_RESTAURANT:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: null,
      };
    default:
      return state;
  }
};
