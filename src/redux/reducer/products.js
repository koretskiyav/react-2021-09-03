import { arrToMap } from '../utils';
import {
  LOAD_PRODUCTS,
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
  loadedRestaurants: [],
};


export default (state = initialState, action) => {
  const { type, restId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(data) },
        loadedRestaurants: (state.loadedRestaurants.indexOf(restId) >= 0) ? state.loadedRestaurants : [...state.loadedRestaurants, restId],
        loading: false,
        loaded: true,
      };
    case LOAD_PRODUCTS + FAILURE:
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
