import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { NavLink } from 'react-router-dom';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import styles from '../tabs/tabs.module.css';
import cn from 'classnames';

const Restaurant = ({ restaurant, averageRating, tab = 'menu' }) => {
  const { id, name, menu, reviews } = restaurant;

  const activeTab = tab;


  const tabs = [
    { tabId: 'menu', label: 'Menu' },
    { tabId: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.tabs}>
        {tabs.map(({ tabId, label }) => (
          <NavLink  key={tabId} to={`/restaurants/${id}/${tabId}`}>
          <span
            key={tabId}
            className={cn(styles.tab, { [styles.active]: tabId === activeTab })}
          >
          {label}
        </span>
          </NavLink>
        ))}
      </div>
      {activeTab === 'menu' && <Menu menu={menu} key={id} restId={id} />}
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
});

export default connect(mapStateToProps)(Restaurant);
