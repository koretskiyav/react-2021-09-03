import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  averageRatingSelector,
  restaurantSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';

import { loadUsers } from '../../redux/actions';

const Restaurant = ({ restaurant, averageRating, loadUsersAction, loaded, loading }) => {
  const { id, name, menu, reviews } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');

  useEffect(() => {
    if (!loading && !loaded) loadUsersAction();
  }, [loading, loaded, loadUsersAction]);


  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} restId={id} key={id} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} restId={id} />}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
  loading: usersLoadingSelector(state),
  loaded: usersLoadedSelector(state),
});


const mapDispatchToProps = (dispatch, props) => ({
  loadUsersAction: () => dispatch(loadUsers()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
