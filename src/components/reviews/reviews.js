import PropTypes from 'prop-types';
import Review from './review';
import { connect } from 'react-redux';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { allReviewsSelector, allUsersSelector } from '../../redux/selectors';

const Reviews = ({ restaurantId, reviews, allReviews, allUsers }) => {
  return (
    <div className={styles.reviews} data-id="reviews">
      {reviews.map((reviewId) => {
        const review = allReviews[reviewId];
        const userName = allUsers[review.userId].name;
        return (
          <Review key={reviewId} user={userName} text={review.text} rating={review.rating} data-id="reviewsReview"/>
        )
      })}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

// Reviews.propTypes = {
//   reviews: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

const mapStateToProps = (state) => {
  debugger;
  return ({
    allReviews: allReviewsSelector(state),
    allUsers: allUsersSelector(state)
  })
}

export default connect(mapStateToProps)(Reviews);
