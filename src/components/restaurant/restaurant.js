import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import styles from '../restaurants/restaurants.module.css';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>


      <div className={styles.tabs}>
        <NavLink
          key='menu'
          to={`/restaurants/${id}/menu`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          key='reviews'
          to={`/restaurants/${id}/reviews`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Switch>
        <Route path="/restaurants/:restId/menu">
          {({ match }) => <Menu menu={menu} key={match.params.restId} restId={match.params.restId} />}
        </Route>
        <Route path="/restaurants/:restId/reviews">
          {({ match }) => <Reviews reviews={reviews} restId={match.params.restId} />}
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
