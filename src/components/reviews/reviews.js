import Review from './review';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';
import { ReviewProps } from './review/review';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewProps).isRequired,
};



export default Reviews;
