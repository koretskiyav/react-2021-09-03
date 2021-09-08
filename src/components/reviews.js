import Rate from './rate';
import style from './reviews.module.css';

export default function Reviews({ reviews }) {
  const reviewsList = reviews.map(review =>
    (<div key={review.id}>
        <div className={style.user}>
          <span>User: </span>
          <span>{review.user}</span>
        </div>
        <div className={style.text}>
          <span>Review: </span>
          <span>{review.text}</span>
        </div>
        <div className={style.rate}>
          <Rate value={review.rating} />
        </div>
      </div>
    )
  );

  return (
    <div>
      {reviewsList}
    </div>
  );
}