
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './basketItem.module.css';
import Button from '../../button';
import { decrement, increment, removeItem } from '../../../redux/actions';

const BasketItem = ({ orderItem, amount, decrement, increment, removeItem}) => {
  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{orderItem.name}</h4>
          <div className={styles.price}>{orderItem.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => decrement(orderItem.id)}
                icon="minus"
                data-id="product-decrement"
              />
              <Button
                onClick={() => increment(orderItem.id)}
                icon="plus"
                data-id="product-increment"
              />
              <Button
                onClick={() => removeItem(orderItem.id)}
                icon="delete"
                data-id="product-delete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  orderItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  amount: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return ({
    orderItem: state.order[props.item.id],
    amount: state.order[props.item.id] ? state.order[props.item.id].count : 0
  })
};

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.item)),
  decrement: () => dispatch(decrement(props.item)),
  removeItem: () => dispatch(removeItem(props.item))
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);