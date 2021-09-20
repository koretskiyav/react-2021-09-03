import { v4 as uuidv4 } from 'uuid';
import { ADDRESTAURANT, ADDREVIEW, ADDUSER } from '../constants';
uuidv4();
export default (store) => (next) => (action) => {
  const {type, values}= action;
  if (type===ADDREVIEW && values){
    const {name, text, rating} = values;
    const rewiewID = uuidv4();
    const userID = uuidv4();
    store.dispatch({type: ADDREVIEW, review:{id: rewiewID, userId: userID, text, rating}});
    store.dispatch({type: ADDUSER, user:{id: userID, name}});
    const currRestaurant = store.getState().restaurants[action?.restaurantId];
    currRestaurant.reviews = [...currRestaurant.reviews, rewiewID];
    store.dispatch({type: ADDRESTAURANT, restaurant:currRestaurant})
  }
  else {
    next(action);
  }
};
