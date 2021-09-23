import produce from 'immer';
import { LOAD_PRODUCTS_PER_RESTAURANT, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  loading: false,
  loaded: {},
  entities: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, data, error, restId } = action;

  switch (type) {
    case LOAD_PRODUCTS_PER_RESTAURANT + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_PRODUCTS_PER_RESTAURANT + SUCCESS:
      draft.loading = false;
      data.map(item => draft.entities[item.id] = item);
      if (restId) draft.loaded[restId] = true;
      break;
    case LOAD_PRODUCTS_PER_RESTAURANT + FAILURE:
      draft.loading = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});