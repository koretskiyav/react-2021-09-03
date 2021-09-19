import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const userSelector = (state) => state.users;
const reviewSelector = (state) => state.reviews;
const restaurantSelector = (state) => state.restaurants;




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

export const userReviewSelector = createSelector(
  [userSelector, (state, userId) => userId],
  (users, userId) => users[userId].name,
);

export const restaurantReviewsSelector = createSelector(
  [reviewSelector, (state, arrId) => arrId],
  (reviews, arrId) => {
    const fn = arr => obj => (arr.map(id => obj[id]));
    return fn(arrId)(reviews);
  },
);

export const restaurantsSelector = createSelector(
  [restaurantSelector],
  (restaurants) => restaurants,
);


