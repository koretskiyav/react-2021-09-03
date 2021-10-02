import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, FAILURE, SUCCESS, REQUEST } from '../constants';
import produce from 'immer';


const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};
export default (state = initialState, action) => {
  const { type, restId,data, error } = action;
  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      }
    case LOAD_PRODUCTS + SUCCESS:
      return produce(state, (draft) => {
          draft.entities[restId] = arrToMap(data);
          draft.loaded = true;
          draft.loading = false;
      });

    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error:error
      }
    default:
      return state;
  }
};
