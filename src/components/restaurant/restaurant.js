import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import styles from "../tabs/tabs.module.css";

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>

      <div className={styles.tabs}>
      <NavLink to={ `/restaurants/${id}/menu` } className={styles.tab} activeClassName={styles.active} > Menu </NavLink>
      <NavLink to={ `/restaurants/${id}/reviews` } className={styles.tab} activeClassName={styles.active}> Reviews </NavLink>
      </div>


      <Switch>
      <Redirect from={`/restaurants/${id}`} exact to={`/restaurants/${id}/menu`} />
      <Route path={ `/restaurants/${id}/menu` } component={() => <Menu menu={menu} key={id} restId={id} />} />
      <Route path={ `/restaurants/${id}/reviews` } component={() => <Reviews reviews={reviews} restId={id} />} />
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
