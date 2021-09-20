import { v4 as uuidv4 } from 'uuid';
import { addUser, addReview, addReviewToRestaurant } from '../actions';


export default (store) => (next) => (action) => {
  const {type, restaurantId} = action;

  switch (type) {
    case 'ADDREVIEW':
      const userId = uuidv4();
      const reviewId = uuidv4();

      const newReviewAction = {...addReview(action), id: reviewId, userId };
      const newUserAction = {...addUser(action), id: userId};
      const newEditRestaurantAction = {...addReviewToRestaurant(restaurantId, reviewId)};

      next(newUserAction);
      next(newReviewAction);
      next(newEditRestaurantAction);
      break;
    default:
      next(action);
  }
}