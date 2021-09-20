import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

const restaurantsPreSelector = (state) => state.restaurants;
const amountPreSelector = (state, id) => orderSelector(state)[id];
const productPreSelector = (state, id) => productsSelector(state)[id];

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

export const amountSelector = createSelector(
  [amountPreSelector],
  (amount) => amount || 0
);

export const productSelector = createSelector(
  [productPreSelector],
  (product) => product
)

export const restaurantsSelector = createSelector(
  [restaurantsPreSelector],
  (restaurants) => restaurants
)

export const allReviewsSelector = createSelector(
  [reviewsSelector],
  (reviews) => reviews
)

export const allUsersSelector = createSelector(
  [usersSelector],
  (users) => users
)
