import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSelector } from '../../../redux/selectors';
 
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => {
 
  console.log(user);

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user.userId}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text.text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating.rating} />
        </div>
      </div>
    </div>
  );
};

// Review.propTypes = {
//   user: PropTypes.string,
//   text: PropTypes.string,
//   rating: PropTypes.number.isRequired,
// };

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => ({
  user: userSelector(state, props.id),
  text: state.reviews[props.id],
  rating: state.reviews[props.id],
});

export default connect(mapStateToProps)(Review);
