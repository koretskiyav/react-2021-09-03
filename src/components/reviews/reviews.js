import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews, restaurantId }) => {
  return (
    <div className={styles.reviews}>
      {Object.keys(reviews).map((id) => (
        <Review key={id} {...reviews[id]} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

export default Reviews;
