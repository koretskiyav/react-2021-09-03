import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import { usersLoadedSelector, usersLoadingSelector, reviewsLoadedSelector, reviewsLoadingSelector } from '../../redux/selectors';

const Reviews = ({ revLoading, revLoaded, usersLoaded, usersLoading, reviews, restId, loadReviews, loadUsers }) => {
  useEffect(() => {
    if (!revLoaded[restId] && !revLoading) loadReviews(restId);
  }, [revLoaded, restId, revLoading, loadReviews]);

  useEffect(() => {
    if (!usersLoaded && !usersLoading) loadUsers();
  }, [usersLoaded, usersLoading, loadUsers])


  // (!loading && !loaded[id])
  if (revLoading || usersLoading) return <Loader />;
  if (!revLoaded[restId] || !usersLoaded) return 'No data :(';

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

const mapDispatchToProps = {
  loadReviews,
  loadUsers
};

const mapStateToProps = (state) => ({
  revLoaded: reviewsLoadedSelector(state),
  revLoading: reviewsLoadingSelector(state),
  usersLoaded: usersLoadedSelector(state),
  usersLoading: usersLoadingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
