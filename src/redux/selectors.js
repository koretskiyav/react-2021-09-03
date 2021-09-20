import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;




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

//*************************************************************** */

export const userReviewSelector = createSelector(
  [(state) => state.users, (state, userId) => userId],
  (users, userId) => users[userId].name,
);

export const restaurantReviewsSelector = createSelector(
  [(state) => state.reviews, (state, arrId) => arrId],
  (reviews, arrId) => {
    const fn = arr => obj => (arr.map(id => obj[id]));
    return fn(arrId)(reviews);
  },
);

export const restaurantsSelector = createSelector(
  [(state) => state.restaurants],
  (restaurants) => restaurants,
);

export const ammountSelector = createSelector(
  [(state) => state.order, (state, productId) => productId],
  (orders, productId) => {
    return orders[productId] || 0;
  },
);

export const productSelector = createSelector(
  [(state) => state.products, (state, productId) => productId],
  (products, productId) => {
    return products[productId];
  },
);

export const restaurantSelector = createSelector(
  [(state) => state.restaurants, (state, restaurantId) => restaurantId],
  (restaurants, restaurantId) => {
    return restaurants[restaurantId];
  },
);


