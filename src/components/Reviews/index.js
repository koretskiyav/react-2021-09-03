
import Review from './review';
import style from './index.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={style['all-reviews']}>
      <h4>Reviews</h4>
      {reviews.map((review) => (
        <Review key={review.id} user={review?.user} rating={review?.rating} text={review?.text} />
      ))}
    </div>
  )
}