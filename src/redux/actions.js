import { DECREMENT, INCREMENT, REMOVEITEM, SHOWBASKET } from './constants';

export const increment = (product) => ({ type: INCREMENT, product });
export const decrement = (product) => ({ type: DECREMENT, product });
export const removeItem = (product) => ({ type: REMOVEITEM, product });
export const showBasket = () => ({ type: SHOWBASKET });
