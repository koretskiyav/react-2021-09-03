import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import { orderProductsSelector, orderStatusSelector, totalSelector } from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { createOrder } from '../../redux/actions';
import Loader from '../loader/loader';
import { useContext } from 'react';
import convertContext from '../../contexts/convert-context';

function Basket({ title = 'Basket', total, orderProducts, createOrder, pending }) {
   const convert = useContext(convertContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  if (pending) return <Loader />

  return (
    <div className={styles.basket}>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
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
          <p>{convert(total)}</p>
        </div>
      </div>
      <Link to="/checkout">
        <Button onClick={createOrder} primary block>
          checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    pending: orderStatusSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  createOrder: () => dispatch(createOrder()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
