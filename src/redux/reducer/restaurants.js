import { normalizedRestaurants } from '../../fixtures';
import { ADDRESTAURANT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, restaurant } = action;
  console.log(restaurant, type, action);

  switch (type) {
    case ADDRESTAURANT:
      return {...restaurants, [restaurant.id]:restaurant}
    default:
      return restaurants;
  }
};
