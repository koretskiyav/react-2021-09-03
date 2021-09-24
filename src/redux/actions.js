import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  CHANGE_RESTAURANT,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_USERS,
} from './constants';


import { checkProductsRestaurantsSelector } from './selectors';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const changeRestaurant = (activeId) => ({
  type: CHANGE_RESTAURANT,
  activeId,
});

export const addReview = (review, restId) => ({
  type: ADD_REVIEW,
  review,
  restId,
  generateId: ['reviewId', 'userId'],
});



export const loadMainInfo = () => async (dispatch) => {
  dispatch({ type: LOAD_RESTAURANTS + REQUEST });
  try {
    const dataRestaurants = await fetch('/api/restaurants').then((res) => res.json());
    dispatch({ type: LOAD_RESTAURANTS + SUCCESS, data: dataRestaurants });
    const dataUsers = await fetch('/api/users').then((res) => res.json());
    dispatch({ type: LOAD_USERS + SUCCESS, data: dataUsers });
  } catch (error) {
    dispatch({ type: LOAD_RESTAURANTS + FAILURE, error });
  }
};


export const loadReviews = (restId) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, restId });

  try {
    const data = await fetch(`/api/reviews?id=${restId}`).then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_REVIEWS + SUCCESS, restId, data });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, restId, error });
  }
};


export const loadProducts = (restId) => async (dispatch, getState) => {
  if (!checkProductsRestaurantsSelector(getState(), { id: restId })) {
    dispatch({ type: LOAD_PRODUCTS + REQUEST, restId });
    try {
      const data = await fetch(`/api/products?id=${restId}`).then((res) =>
        res.json()
      );
      dispatch({ type: LOAD_PRODUCTS + SUCCESS, restId, data });
    } catch (error) {
      dispatch({ type: LOAD_PRODUCTS + FAILURE, restId, error });
    }
  }
};


