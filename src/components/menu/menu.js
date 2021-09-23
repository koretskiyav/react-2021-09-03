import { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import styles from './menu.module.css';
import { loadProducts } from '../../redux/actions';
import { loadedProductsRestaurantsSelector, productsLoadingSelector, productsLoadedSelector } from '../../redux/selectors';

const Menu = ({ menu, restId, loadedRestaurants, loading, loaded, loadProductsAction }) => {

  useEffect(() => {
    if (loadedRestaurants.indexOf(restId) < 0) {
      loadProductsAction();
    }
  }, [restId, loading, loaded, loadedRestaurants, loadProductsAction]);


  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

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

const mapStateToProps = (state, props) => ({
  loadedRestaurants: loadedProductsRestaurantsSelector(state, props),
  loading: productsLoadingSelector(state, props),
  loaded: productsLoadedSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProductsAction: () => dispatch(loadProducts(props.restId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
