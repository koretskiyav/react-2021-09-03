import Rate from './Rate';
import style from './Reviews.module.css';

export default function Reviews({ reviews }) {
  let revs = reviews.map(review => <Review key = {review.id} review = {review}/>);
  
  return (
    <div>
      <h2 className={style.revheader}>Отзывы</h2>
      {revs}
    </div>
  )
}

function Review({review}) {
  return (
    <div className={style.revblock}>
      <div className={style.revlist}>
        <h2 className={style.revUser}>{review.user}</h2>
        <div className={style.revText}>{review.text}</div>
        <Rate rating={review.rating}/>
      </div>
    </div>
    
  )
}