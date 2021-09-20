import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaulReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaulReviews, action) => {
  const { type, review } = action;
  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [review.id]: review };
    default:
      return reviews;
  }
};
