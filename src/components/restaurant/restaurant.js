import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import Loader from '../loader';
import { loadProducts, loadReviews } from '../../redux/actions';
import {
  averageRatingSelector,
  restaurantSelector,
  productsLoadingSelector, productsLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
} from '../../redux/selectors';





const Restaurant = ({ restaurant, averageRating, loading, loaded, loadProductsAction, loadedReviews, loadingReviews, loadReviewsAction, }) => {
  const { id, name, menu, reviews } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');

  useEffect(() => {
    loadReviewsAction(id);
  }, [id, loadingReviews, loadedReviews, loadReviewsAction]);

  useEffect(() => {
    loadProductsAction(id);
  }, [id, loading, loaded, loadProductsAction]);

  if (loading || loadingReviews) return <Loader />;
  if (!loaded || !loadedReviews) return 'No data :(';

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];



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
  loading: productsLoadingSelector(state, props),
  loaded: productsLoadedSelector(state, props),
  loadingReviews: reviewsLoadingSelector(state),
  loadedReviews: reviewsLoadedSelector(state),
});


const mapDispatchToProps = (dispatch) => ({
  loadProductsAction: (id) => dispatch(loadProducts(id)),
  loadReviewsAction: (id) => dispatch(loadReviews(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
