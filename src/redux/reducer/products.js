// import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';
import { CHANGE_RESTAURANT, LOAD_PRODUCTS_PER_RESTAURANT, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS_PER_RESTAURANT + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null
      }
    case LOAD_PRODUCTS_PER_RESTAURANT + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: {...state.entities, ...arrToMap(data)}
      }
    case LOAD_PRODUCTS_PER_RESTAURANT + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error
      }
    case CHANGE_RESTAURANT:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: null
      };
    default:
      return state;
  }
};
