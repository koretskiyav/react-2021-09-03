import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

export const activeRestaurantIdSelector = (state) => state.restaurants.activeId;
export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;
export const orderSendingSelector = (state) => state.order?.sending;
export const orderErrorSelector = (state) => state.order.error;

export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.restId];
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.restId];

export const reviewsLoadingSelector = (state, props) =>
  state.reviews.loading[props.restId];
export const reviewsLoadedSelector = (state, props) =>
  state.reviews.loaded[props.restId];

export const orderDataSelector = createSelector(
  [orderSelector],
  (order) => {
    return order?.data || {};
  }
);

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const restaurantSelector = (state, { id }) =>
  restaurantsSelector(state)[id];
export const productSelector = (state, { id }) => productsSelector(state)[id];
export const reviewSelector = (state, { id }) => reviewsSelector(state)[id];
export const amountSelector = (state, { id }) => {
  return orderDataSelector(state)[id] || 0;
}

const restaurantsIdsByProductsSelector = createSelector(
  restaurantsListSelector,
  (restaurants) =>
    restaurants
      .flatMap((rest) =>
        rest.menu.map((productId) => ({ productId, restId: rest.id }))
      )
      .reduce(
        (acc, { productId, restId }) => ({ ...acc, [productId]: restId }),
        {}
      )
);

export const orderProductsSelector = createSelector(
  [productsSelector, orderDataSelector, restaurantsIdsByProductsSelector],
  (products, order, restaurantsIds) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => {
        return ({
          product,
          amount: order[product.id],
          subtotal: order[product.id] * product.price,
          restId: restaurantsIds[product.id],
        })
      })
);

export const orderForSendingSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) => (
    orderProducts.map(orderItem => ({
        id: orderItem.product.id,
        amount: orderItem.amount
    })
  ))
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
    const ratings = restaurant.reviews.map((id) => reviews[id]?.rating || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    );
  }
);
