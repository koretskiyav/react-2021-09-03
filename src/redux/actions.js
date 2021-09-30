import { replace } from 'connected-react-router';
import {
  ADD_REVIEW,
  CHANGE_RESTAURANT,
  DECREMENT,
  FAILURE,
  INCREMENT,
  LOAD_PRODUCTS,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  POST_ORDER,
  REMOVE,
  REQUEST,
  SUCCESS
} from './constants';

import { reviewsLoadedSelector, reviewsLoadingSelector, usersLoadedSelector, usersLoadingSelector } from './selectors';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const changeRestaurant = (activeId) => ({
  type: CHANGE_RESTAURANT,
  activeId
});

export const addReview = (review, restId) => ({
  type: ADD_REVIEW,
  review,
  restId,
  generateId: ['reviewId', 'userId']
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants'
});
export const loadProducts = (restId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restId}`,
  restId
});

const _loadUsers = () => ({ type: LOAD_USERS, CallAPI: '/api/users' });

export const loadReviews = (restId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restId });
  const loaded = reviewsLoadedSelector(state, { restId });

  if (loading || loaded) return;
  dispatch({ type: LOAD_REVIEWS + REQUEST, restId });

  try {
    const data = await fetch(`/api/reviews?id=${restId}`).then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_REVIEWS + SUCCESS, restId, data });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, restId, error });
    dispatch(replace('/error'));
  }
};

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch(_loadUsers());
};

export const postOrder = () => async (dispatch, getState) => {
  const order = getState().order.entities;
  const location = getState().router.location;
  const massOrder = Object.entries(order).reduce((acc, [key, value]) =>
      [...acc, { id: key, amount: value }]
    , []);
  if (location.pathname !== '/checkout') return;

  dispatch({ type: POST_ORDER + REQUEST });
  try {
    let code = 0;
    const data = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(massOrder)
    }).then((res) => {
      code = res.status;
      return res.json();
    });

    if (code === 200) {
      dispatch({ type: POST_ORDER + SUCCESS, data });
      dispatch(replace('/success'));
    } else {
      dispatch({ type: POST_ORDER + FAILURE, data });
      dispatch(replace('/error'));
    }

  } catch (error) {
    console.log(error.responce);
    dispatch({ type: POST_ORDER + FAILURE, data: error });
    dispatch(replace('/error'));
  }
};
