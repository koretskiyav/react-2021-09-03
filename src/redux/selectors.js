import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

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
  [reviewsSelector],
  (review) =>
    Object.values(review)
);

export const userSelector = createSelector(
  [usersSelector, reviewsSelector],
  (users, reviews) =>
    Object.keys(reviews)
    .filter((userId) => reviews[userId])
    .map((userId) => users[userId])
);

export const restSelector = createSelector(
  [restaurantsSelector],
  (restaurant) => 
    Object.values(restaurant)
);
