import Rate from './rate';
import style from './reviews.module.css';

export default function Reviews({ reviews }) {
  const reviewElements = reviews.map((review) => {
    return (
      <div key={review.id} className={style.card}>
        <h4>{ review.user }</h4>
        <p className={style.text}><i>{review.text}</i></p>
        <Rate rating={review.rating}/>
      </div>
    )
  });
  return (
    <div className={style.card}>
      <h2 className={style.cardTitle}>Reviews</h2>
      {reviewElements}
    </div>

  );
}
