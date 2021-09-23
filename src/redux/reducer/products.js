import { LOAD_PRODUCTS, CHANGE_RESTAURANT, FAILURE, SUCCESS, REQUEST } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error } = action;

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
        loading: false,
        loaded: true,
        entities: {...state.entities, ...arrToMap(data)},
      };
    case LOAD_PRODUCTS + FAILURE:
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
