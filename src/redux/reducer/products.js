import { arrToMap } from '../utils';
import { LOAD_PRODUCTS_PER_RESTAURANT, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  loading: false,
  loaded: {},
  entities: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error, restId } = action;

  switch (type) {
    case LOAD_PRODUCTS_PER_RESTAURANT + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,        
      }
    case LOAD_PRODUCTS_PER_RESTAURANT + SUCCESS:
      return {
        ...state,
        loading: false,
        entities: {...state.entities, ...arrToMap(data)},
        loaded: restId ? {...state.loaded, [restId]: true} : {...state.loaded},
      }
    case LOAD_PRODUCTS_PER_RESTAURANT + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: restId ? {...state.loaded, [restId]: false}: {...state.loaded},
        error: error
      }
    default:
      return state;
  }
};
