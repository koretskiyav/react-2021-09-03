import { Component } from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import { productsLoadedSelector, productsLoadingSelector } from '../../redux/selectors';
import { useEffect } from 'react';
import { productsSelector } from '../../redux/selectors';

const Menu = ({menu,
               error,
               restId,
              loaded,
              loading,
              loadProducts,
              products
              }) =>{

  useEffect(() => {
    if(!products)
      loadProducts(restId);
  }, [restId, products, loadProducts]);
  if (error) {
    return <p>Меню этого ресторана сейчас недоступно :(</p>;
  }
  if(loaded === false && loading === true){
    return <p>Loading products ...</p>
  }
    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} restId={restId} loaded={loaded}/>
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
}
const mapStateToProps = (state) =>({
  loaded: productsLoadedSelector(state),
  loading: productsLoadingSelector(state),
  products: productsSelector(state)
});
const mapDispatchToProps = {
  loadProducts
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
