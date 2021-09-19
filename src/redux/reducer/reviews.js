import { normalizedReviews } from '../../fixtures';


const defaulReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaulReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
