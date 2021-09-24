
import { arrToMap } from '../utils';
import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  loadedRestaurants: [],
  error: null,
};


export default (state = initialState, action) => {
  const { type, review, reviewId, userId, restId, data, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        entities: { ...state.entities, [reviewId]: { id: reviewId, userId, text, rating } },
      };
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
        entities: { ...state.entities, ...arrToMap(data) },
        loadedRestaurants: (state.loadedRestaurants.indexOf(restId) >= 0) ? state.loadedRestaurants : [...state.loadedRestaurants, restId],
        loading: false,
        loaded: true,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
