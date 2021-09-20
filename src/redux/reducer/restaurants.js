import { normalizedRestaurants } from '../../fixtures';
import { ADDREVIEWTORESTAURANT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  return {
    ...acc,
    [restaurant.id]: restaurant
  }
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, restaurantId, reviewId } = action;

  switch (type) {
    case ADDREVIEWTORESTAURANT:
      const newRestaurants = {...restaurants};
      newRestaurants[restaurantId].reviews.push(reviewId);
      debugger;
      return newRestaurants;
    default:
      return restaurants;
  }
};
