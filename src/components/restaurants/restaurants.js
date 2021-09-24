import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsListSelector,
  activeRestaurantIdSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../../redux/selectors';
import { loadMainInfo, changeRestaurant } from '../../redux/actions';
function Restaurants({
  restaurants,
  activeId,
  loading,
  loaded,
  loadMainInfo,
  changeRestaurant,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadMainInfo();
  }, [loading, loaded, loadMainInfo]);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  if (loading) return <Loader />;
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
});

const mapDispatchToProps = {
  //loadRestaurants,
  loadMainInfo,
  changeRestaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
