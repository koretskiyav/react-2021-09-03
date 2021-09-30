import { connect } from 'react-redux';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import { orderProductsSelector, totalSelector, checkoutOrderLoadedSelector, checkoutOrderLoadingSelector } from '../../redux/selectors';
import { userContext } from '../../contexts/user-context';
import { checkOutOrder } from '../../redux/actions';
import Loader from '../loader';
import { current } from 'immer';

function Basket({ title = 'Basket', total, orderProducts, checkOutOrder, loading }) {
  const { currency, calcPrice } = useContext(userContext);

  if (loading) return <Loader />;

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }



  return (
    <div className={styles.basket}>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <h4 className={styles.title}>
        {title}
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restId={restId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p>{`${calcPrice(total)} ${currency}`}</p>
        </div>
      </div>
      {/* <Link to="/checkout"> */}
      <Button onClick={checkOutOrder} primary block>
        checkout
      </Button>
      {/* </Link> */}
    </div>
  );
}


const mapStateToProps = (state, props) => ({
  total: totalSelector(state),
  orderProducts: orderProductsSelector(state),
  loading: checkoutOrderLoadingSelector(state),
  loaded: checkoutOrderLoadedSelector(state),

});

const mapDispatchToProps = (dispatch, props) => ({
  checkOutOrder: () => dispatch(checkOutOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
