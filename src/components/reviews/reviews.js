import Review from './review';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review 
          key={review.id} 
          user={review.user} 
          text={review.text} 
          rating={review.rating} />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  // reviews: PropTypes.array.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ).isRequired,
};

export default Reviews;