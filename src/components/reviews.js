import style from "./review.module.css";
import Rate from "./rate";

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <div className={style.wrapper}>
          <div key={review.id} className={style.card}>
            <p>{review.user}</p>
            <p>{review.text}</p>
            <Rate amount={parseInt(review.rating)} />
          </div>
        </div>
      ))}
    </div>
  );
}
