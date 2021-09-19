import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import { connect } from 'react-redux';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant, allReviews }) => {
  const { id, name, menu, reviews } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, reviewID) => acc + allReviews[reviewID].rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  // const currReviews = useMemo(() => {
  //   reviews.reduce((acc, reviewId) => {
  //     return ([...acc, allReviews[reviewId]]);
  //   }, []);
  // }, [allReviews, restaurant]);  //возвращает undefined

  const currReviews =
    reviews.reduce((acc, reviewId) =>
        [...acc, allReviews[reviewId]]
      , []);

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' }
  ];

  useEffect(()=>{
    console.log(currReviews);},[currReviews])

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} key={id} />}
      {activeTab === 'reviews' && <Reviews reviews={currReviews || []} />}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};

export default connect((state) => {
  return {
    allReviews: state.reviews
  };
})(Restaurant);
