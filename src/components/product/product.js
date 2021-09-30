import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import Button from '../button';
import { decrement, increment } from '../../redux/actions';
import { amountSelector, productSelector } from '../../redux/selectors';
import convertContext from '../../contexts/convert-context';
import { useContext } from 'react';

const Product = ({ product, amount, increment, decrement }) => {
  // if (!product) return null;
  const convert = useContext(convertContext);

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{convert(product.price)}</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button onClick={decrement} icon="minus" />
              <Button onClick={increment} icon="plus" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
  // from connect
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: amountSelector(state, props),
  product: productSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
