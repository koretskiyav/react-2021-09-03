import { v4 as uuidv4 } from 'uuid';
import {CREATE_USER} from '../constants';

export default (store) => (next) => (action) => {
  let state = store.getState();
  if(action.type === CREATE_USER){
    const user_id = uuidv4();
    const review_id = uuidv4();
    state.users[user_id] = {id:user_id, name:action.data.name};
    state.reviews[review_id] = {id:review_id, text:action.data.text, rating: action.data.rating, userId:user_id};
    const restaurant = state.restaurant;
    state.restaurants[restaurant.id].reviews = [...state.restaurants[restaurant.id].reviews, review_id];
  }
  next(action);
}