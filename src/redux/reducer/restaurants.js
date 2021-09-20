import { normalizedRestaurants } from '../../fixtures';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants) => {
  return restaurants;
};
