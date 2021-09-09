import Review from './review';
import Rate from './rate';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h3>Отзывы</h3>
      <h6>Средний рейтинг:</h6>
      <Rate rate={middleRate(reviews)} />

      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

function middleRate(reviews) {
  let sum = 0;

  reviews.forEach((item) => {
    sum += item.rating;
  });

  return Math.round(sum / reviews.length);
}