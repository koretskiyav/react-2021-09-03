import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/actions';
import { getProductByIdService } from '../../model/service/getProduct';
import CartItem from '../cartItem';
import styles from '../menu/menu.module.css';
import Product from '../product/product';


function Basket({ items }){
  console.log(items);
  return (<div className={styles.basket}>
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  </div>)
}

const mapStateToProps = (state, props) =>{
  let items = [];
  Object.keys(state.order).forEach((id)=>{
    let item = getProductByIdService(id);
    item.qty = state.order[id];
    if(item.qty > 0){
      items.push(item);
    }
  });
  return {
   items
  }
}
// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
