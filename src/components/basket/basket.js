import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import { isOrderPosting, orderProductsSelector, totalSelector } from '../../redux/selectors';
import { postOrder } from '../../redux/actions';
import Loader from '../loader';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';

function Basket({ title = 'Basket', total, orderProducts, postOrder, isLoading }) {
  // const { name } = useContext(userContext);
  const { currencyPrice } = useContext(UserContext);

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
        {/*<UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>*/}
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames='basket-item'
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
          <p>{currencyPrice(total)}</p>
        </div>
      </div>
      <Link to='/checkout'>
        <Button primary block onClick={postOrder} disabled={isLoading}>
          {isLoading ? <Loader /> : 'Checkout'}
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    isLoading: isOrderPosting(state)
  };
};

const mapDispatchToProps = { postOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
