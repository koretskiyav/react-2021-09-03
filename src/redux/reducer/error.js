import { PLACE_ORDER, FAILURE } from '../constants';

export default (state={},action)=>{
  const { type, error } = action;
  switch(type) {
    case PLACE_ORDER + FAILURE:
      return { ...state, error }
    default:
      return state;
  }
}