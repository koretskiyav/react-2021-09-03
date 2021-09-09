import Rate from './rate';

import style from './review.module.css';

export default function Review({ review }) {
  return (
    <div className={style.review}>
      <p>{review.user}</p>
      <p>{review.text}</p>
      <Rate key={review.id} rate={review.rating} id={review.id} />
    </div>
  );
}