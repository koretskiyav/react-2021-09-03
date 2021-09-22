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
  productsLoadedSelector,
  productsLoadingSelector
} from '../../redux/selectors';
import { loadProductsPerRestaurant } from '../../redux/actions';

const Restaurant = ({ loaded, loading, loadProductsPerRestaurant, restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  useEffect((id) => {
    loadProductsPerRestaurant(id);
  }, [loadProductsPerRestaurant]);

  const [activeTab, setActiveTab] = useState('menu');

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
      {activeTab === 'menu' && <Menu menu={menu} key={id} />}
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
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProductsPerRestaurant: () => dispatch(loadProductsPerRestaurant(props.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
