import { normalizedRestaurants } from '../../fixtures';
import { ADD_RESTAURANT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, restaurant } = action;
  switch (type) {
    case ADD_RESTAURANT:
      return { ...restaurants, [restaurant.id]: restaurant };
    default:
      return restaurants;
  }
};
