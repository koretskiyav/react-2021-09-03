import style from '../product.module.css';
import Rate from './rate';

export default function Review({ review }) {
  return (
    <div className={style.card}>
      <p>{review.user}</p>
      <p>{review.text}</p>
      <Rate value={review.rating}/>
    </div>
  );
}

