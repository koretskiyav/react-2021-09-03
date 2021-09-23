import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productLoadedSelector, productLoadingSelector } from '../../redux/selectors';
import { loadProductsForRestaurant } from '../../redux/actions';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

export const Menu = ({ menu, loading, loaded, loadProductsForRestaurant, restaurantId }) => {

  useEffect(() => {
    if (!loading && !loaded[restaurantId]) {
      loadProductsForRestaurant(restaurantId);
    }
  }, [loading, loaded, restaurantId, loadProductsForRestaurant]);

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: productLoadingSelector(state),
  loaded: productLoadedSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProductsForRestaurant: () => dispatch(loadProductsForRestaurant(props.restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
