import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const restaurantReviews = (state,restaurant)=> restaurant.reviews;
const reviews = (state) => state.reviews
const user = (state, userId) => state.users[userId];

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

export const loadedRestaurantReviews = createSelector(
      [restaurantReviews, reviews],
            (reviewIds, reviews) => reviewIds.reduce((acc, id)=> ({...acc, [id]:reviews[id]}),[])

);

export const getUserName = createSelector(
    [user],
            (user)=> user.name
);
