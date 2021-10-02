import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
export const productsSelector = (state) => state.products.entities[activeRestaurantIdSelector(state)];
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews.entities[activeRestaurantIdSelector(state)];
const usersSelector = (state) => state.users.entities;

export const activeRestaurantIdSelector = (state) => state.restaurants.activeId;
export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;

export const userLoadedSelector = (state) => state.users.loaded;
export const userLoadingSelector = (state) => state.users.loading;

export const reviewsLoadedSelector = (state) => state.reviews.loaded;
export const reviewsLoadingSelector = (state) => state.reviews.loading;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const restaurantSelector = (state, { id }) =>
  restaurantsSelector(state)[id];
export const productSelector = (state, { restId, id }) =>  { return productsSelector(state, restId)?.[id]; };
export const reviewSelector = (state, { id }) => reviewsSelector(state)[id];
export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
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

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  restaurantSelector,
  (reviews, restaurant) => {
    if(!reviews) return 3;
    const ratings = restaurant.reviews.map((id) => reviews[id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
