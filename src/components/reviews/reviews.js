import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';

import { reviewLoadedSelector, reviewLoadingSelector, userLoadedSelector, userLoadingSelector } from '../../redux/selectors';
import { loadReviews, loadUsers } from '../../redux/actions';

const Reviews = ({ reviews, restId, loadReviews, loadUsers, usersLoading, usersLoaded, reviewsLoading, reviewsLoaded }) => {

  useEffect(() => {
    if (!usersLoading && !usersLoaded) {
      loadUsers();
    }
  }, [loadUsers, usersLoading, usersLoaded]);
  
  useEffect(() => {
    if (!reviewLoadingSelector[restId] && !reviewLoadedSelector) {
      loadReviews();
    }
  }, [loadReviews, reviewsLoading, reviewsLoaded, restId]);

  if (usersLoading || reviewsLoading) return <Loader />;
  if (!usersLoaded || reviewsLoaded) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restId={restId} />
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  usersLoading: userLoadingSelector(state),
  usersLoaded: userLoadedSelector(state),
  reviewsLoading: reviewLoadingSelector(state),
  reviewsLoaded: reviewLoadedSelector(state),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
