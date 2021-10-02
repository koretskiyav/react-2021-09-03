import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

import { reviewWitUserSelector, userLoadedSelector, userLoadingSelector } from '../../../redux/selectors';
import { loadUsers } from '../../../redux/actions';
import Loader from '../../loader';
import { useEffect } from 'react';

const Review = ({ user, text, rating, userLoaded, userLoading, loadUsers }) => {
  useEffect(() => {
    if(userLoaded === false  && userLoading === false) {
      loadUsers();
    }
  },[userLoading, userLoaded, loadUsers])
  if(userLoaded === false && userLoading === true){
    return (<Loader />);
  }
 return (
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
)};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

// const mapStateToProps = (state, props) => ({
//   ...reviewWitUserSelector(state, props),
// });

// const mapStateToProps = (state, props) => reviewWitUserSelector(state, props);
const mapStateToProps = (state, props) => ({
  ...reviewWitUserSelector(state, props),
  userLoaded: userLoadedSelector(state),
  userLoading: userLoadingSelector(state)
});
const mapDispatchToProps = {
  loadUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
