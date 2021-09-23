import produce from 'immer';

import { ADD_REVIEW, CHANGE_RESTAURANT, FAILURE, LOAD_USERS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error, review, userId } = action;

  switch(type) {
    case ADD_REVIEW:
        const { name } = review;
        state.entities[userId] = { id: userId, name };
        break;
    case LOAD_USERS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_USERS + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: {...state.entities, ...arrToMap(data)},
      };
    case LOAD_USERS + FAILURE:
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
