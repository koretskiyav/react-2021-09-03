import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import { Redirect, Route, Switch, useParams} from 'react-router';

const Restaurant = ({restaurant, averageRating}) => {
  let {restId} = useParams();
  const { id, name, menu, reviews } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

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

      <Switch>
        <Route path={`/restaurants/${id}/menu`}>
          <Menu menu={menu} key={restId} restId={restId} />
        </Route>
        <Route path={`/restaurants/${id}/reviews`}>
          <Reviews reviews={reviews} restId={restId} />
        </Route>
        <Redirect to={`/restaurants/${id}/menu`} />
      </Switch>

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
});

export default connect(mapStateToProps)(Restaurant);
