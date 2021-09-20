
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasketItem from "./basketItem/";
import styles from './basket.module.css';
import { useMemo } from 'react';

const Basket = ({showBasket, order}) => {
  const totalPrice = useMemo(() => {
    return Object.entries(order).reduce((sum, item) => {
      return sum + item[1].price * item[1].count;
    }, 0);
  }, [order]);

  const basketItems = Object.entries(order).map((item) => {
    if (item[1].count > 0 ) {
      return (<BasketItem key={item[0]} item={item[1]} keyId={item[0]} />)
    }
  });

  return (
    <div className={showBasket ? styles.basketShow : styles.basketHide}>
      <h2>Корзина покупок</h2>
      {basketItems}
      <h4>Цена заказа: {totalPrice} рублей</h4>
    </div>
  )
};

Basket.propTypes = {
  showBasket: PropTypes.bool.isRequired,
  order: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => ({
  showBasket: state.basket || false,
  order: state.order || {}
});

export default connect(mapStateToProps)(Basket);