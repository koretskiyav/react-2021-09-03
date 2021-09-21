import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, review } = action;

  console.log(type);
  switch (type) {
    case ADDREVIEW:
      return { ...reviews, [review.id]: review };
    default:
      return reviews;
  }
};
