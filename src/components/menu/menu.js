import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useEffect} from 'react';

import Product from '../product';
import Loader from '../loader';
import Basket from '../basket';
import {productsLoadingSelector, productsLoadedSelector } from '../../redux/selectors';
import {loadProductsPerRestaurant} from '../../redux/actions';

import styles from './menu.module.css';

const Menu = ({menu, loading, loaded, restId, loadProductsPerRestaurant}) => {

  useEffect(() => {
    if (!loading && !loaded[restId]) {
      loadProductsPerRestaurant(restId);
    }
  }, [loading, loaded, restId, loadProductsPerRestaurant]);

  const product = menu.map((id) => (<Product key={id} id={id} />));
  const finalProduct = loading ? <Loader /> : !loaded[restId] ? 'No data :(' : product;

  return (
    <div className={styles.menu}>
    <div>
      {finalProduct}
    </div>
    <div>
      <Basket />
    </div>
  </div>
  )
}

const mapStateToProps = (state, props) => ({
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProductsPerRestaurant: () => dispatch(loadProductsPerRestaurant(props.restId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
  restId: PropTypes.string.isRequired,
  // From REDUX:
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.objectOf(
    PropTypes.bool.isRequired
  ).isRequired,
  loadProductsPerRestaurant: PropTypes.func.isRequired
}
