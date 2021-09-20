import { SHOWBASKET } from "../constants";

export default function(state = false, action) {
  switch (action.type) {
    case SHOWBASKET:
      return !state;
    default:
      return state;
  }
  
}