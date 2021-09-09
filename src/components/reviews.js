import Review from './review';

export default function Reviews({ reviews = [] }) {
  const reviewsMarkup = reviews.map((review) => (
    <Review key={review?.id} {...review}></Review>
  ));
  return <section>{reviewsMarkup}</section>;
}
