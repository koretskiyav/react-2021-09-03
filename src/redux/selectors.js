import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const restaurantSelector = createSelector(
  [restaurantsSelector],
  (restaurants) => {
    return Object.keys(restaurants).map(
      (restaurantId) => restaurants[restaurantId]
    );
  }
);

export const orderProductsSelector = createSelector(
  [productsSelector, orderSelector],
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const reviewSelector = createSelector(
  [reviewsSelector, usersSelector],
  (reviews, users) => {
    return { reviews, users };
  }
);

export const userSelector = createSelector([usersSelector], (users) => {
  return users;
});
