import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import { loadReviews } from '../../redux/actions';
import {
  restaurantsListSelector,
  activeRestaurantIdSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector
} from '../../redux/selectors';
import { loadRestaurants, changeRestaurant } from '../../redux/actions';
function Restaurants({
  restaurants,
  activeId,
  loading,
  loaded,
  loadRestaurants,
  changeRestaurant,
  loadReviews,
  reviewsLoaded,
  reviewsLoading
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);

  useEffect(() => {
    if(!reviewsLoaded && !reviewsLoaded && activeId !== null) loadReviews(activeId);
  }, [activeId, loadReviews]);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  if (loading || reviewsLoading || !reviewsLoaded) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      <Tabs tabs={tabs} onChange={changeRestaurant} activeId={activeId} />
      <Restaurant id={activeId} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: restaurantsListSelector(state),
  activeId: activeRestaurantIdSelector(state),
  loading: restaurantsLoadingSelector(state),
  loaded: restaurantsLoadedSelector(state),
  reviewsLoaded: reviewsLoadedSelector(state),
  reviewsLoading: reviewsLoadingSelector(state)
});

const mapDispatchToProps = {
  loadRestaurants,
  changeRestaurant,
  loadReviews
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
