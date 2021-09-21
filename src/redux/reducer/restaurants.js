import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
const normalizedRestaurants = defaultRestaurants.reduce((acc, restaurant) => ({...acc, [restaurant.id]:restaurant}), {});
export default (restaurants = normalizedRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
