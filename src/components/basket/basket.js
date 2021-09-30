import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import { orderProductsSelector, totalSelector } from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { makeOrder } from '../../redux/actions';
import { Switch, Route } from 'react-router';
import Error from './Error';
import { CurrencyConsumer } from '../../contexts/currency-context';

function Basket({ title = 'Basket', total, orderProducts, makeOrder}) {
  // const { name } = useContext(userContext);
  return (
    <Switch>
      <Route exact path='/checkout/thankyou' component={() => <h2>Thank you for your order!</h2>} />
      <Route exact path='/checkout/orderError' component={Error} />

      <Route path='/'>
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
              <CurrencyConsumer>
                {({change}) => {
                  const {price, currency} = change(total);
                  return (<p>{`${price} ${currency}`}</p>)}}
              </CurrencyConsumer>
            </div>
          </div>
          <Link to="/checkout">
            <Button primary block onClick={() => makeOrder() }>
              checkout
            </Button>
          </Link>
        </div>
      </Route>
    </Switch>
  )
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state)
  };
};

const mapDispatchToProps = {
  makeOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
