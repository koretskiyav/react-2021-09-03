import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

import { reviewWitUserSelector } from '../../../redux/selectors';

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.defaultProps = {
  user: 'Anonymous',
};

// const mapStateToProps = (state, props) => ({
//   ...reviewWitUserSelector(state, props),
// });

// const mapStateToProps = (state, props) => reviewWitUserSelector(state, props);

const mapStateToProps = reviewWitUserSelector;

Review.propTypes = {
  // From REDUX
  user: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Review);
