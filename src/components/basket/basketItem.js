import Button from '../button';
import { decrement, increment, clear } from '../../redux/actions';
import { connect } from 'react-redux';
import styles from './basketItem.module.css';


const BasketItem = ({ product, amount, decrement, increment, clear }) => {
  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{product.price * amount} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={decrement}
                icon="minus"
              />
              <Button
                onClick={increment}
                icon="plus"
              />
              <Button
                onClick={clear}
                icon="clear"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  clear: () => dispatch(clear(props.product.id))
});

// Вопрос: мне не нужно пробросить только mapDispatchToProps. Если я не пробрасываю mapStateToProps, т.е.
// connect(mapDispatchToProps)(BasketItem) то попадаю на ошибку 
// dispatch is not a function
export default connect(mapStateToProps,mapDispatchToProps)(BasketItem);
