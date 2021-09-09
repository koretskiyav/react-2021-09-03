import Rate from './rate';
import style from './reviews.module.css';

export default function Reviews({ reviews, getMiddleRating }) {
  return (
    <div className={style.reviews}>
      <h3>Reviews</h3>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <span>
              {review.user}: {review.text}
            </span>
            <Rate value={review.rating} full={5} />
          </div>
        );
      })}
    </div>
  );
}
