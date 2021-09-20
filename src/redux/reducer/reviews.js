import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  return {
    ...acc,
    [review.id]: review
  }
}, {})

export default (reviews = defaultReviews, action) => {
  const { type, id, userId, text, rating } = action;

  switch (type) {
    case ADDREVIEW:
      return {...reviews, [id]: {id, userId, text, rating}};
    default:
      return reviews;
  }
};
