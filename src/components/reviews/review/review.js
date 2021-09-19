import PropTypes from 'prop-types';
import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';
import { reviewSelector, userSelector } from '../../../redux/selectors';

const Review = ({ id, review, user }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {review.text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={review.rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => ({
  review: state.reviews[props.id],
  user: state.users[state.reviews[props.id].userId],
});
export default connect((state, props) => {
  console.log('0', reviewSelector(state));
  console.log(props);
  return {
    review: reviewSelector(state).reviews[props.id],
    user: reviewSelector(state).users[
      reviewSelector(state).reviews[props.id].userId
    ],
  };
})(Review);
//export default connect(mapStateToProps)(Review);
