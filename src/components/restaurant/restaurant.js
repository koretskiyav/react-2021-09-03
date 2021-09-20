import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { restaurantReviewsSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, reviews }) => {
  const { id, name, menu } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');
  const averageRating = useMemo(() => {
    const total = Object.keys(reviews).reduce((acc, id) => acc + reviews[id].rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

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
      {activeTab === 'menu' && <Menu menu={menu} key={id} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} restaurantId={id} />}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return { reviews: restaurantReviewsSelector(state, props.restaurant.reviews) }
};

export default connect(mapStateToProps)(Restaurant);


