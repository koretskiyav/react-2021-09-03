import { normalizedReviews as defaultReviews } from '../../fixtures';
const defaultNormalizedReviews = defaultReviews.reduce((acc, review) => ({...acc, [review.id]:review}), {});
export default (reviews = defaultNormalizedReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
