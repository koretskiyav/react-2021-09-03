import styles from './cartItem.module.css';
import Button from '../button';
import { decrement, increment, deleteAction } from '../../redux/actions';
import { connect } from 'react-redux';

function CartItem({item, decrement, increment, deleteAction }){
   return (
     <div className={styles.product} data-id="product">
        <div className={styles.content}>
           <div>
              <h4 className={styles.title}>{item.name}</h4>
              <div className={styles.price}>{item.price * item.qty } $</div>
           </div>
           <div>
              <div className={styles.counter}>
                 <div className={styles.count} data-id="product-amount">
                    {item.qty}
                 </div>
                 <div className={styles.buttons}>
                    <Button
                      onClick={decrement}
                      icon="minus"
                      data-id="product-decrement"
                    />
                    <Button
                      onClick={increment}
                      icon="plus"
                      data-id="product-increment"
                    />
                    <Button
                      onClick={deleteAction}
                      icon="minus"
                      data-id="product-delete"
                    />
                 </div>
              </div>
           </div>
        </div>
     </div>
   )

}
const mapStateToProps = (state, props) =>{
   return {
     state
   }
}
// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props) => ({
   increment: () => dispatch(increment(props.item.id)),
   decrement: () => dispatch(decrement(props.item.id)),
   deleteAction: () => dispatch(deleteAction(props.item.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
