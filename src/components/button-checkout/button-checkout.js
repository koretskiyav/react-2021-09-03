import  { router } from '../../redux/selectors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../button';
import { placeOrder } from '../../redux/actions';
import { isPlacingOrder } from '../../redux/selectors';

const ButtonCheckout = ({ location, placeOrder, loading }) => {
  if(location.pathname === '/checkout'){
    return (
      <Button primary block onClick={placeOrder} disabled = {loading}>
        Place order
      </Button>
    );
  }
  return (
    <Link to="/checkout">
      <Button primary block>
        checkout
      </Button>
    </Link>
  )
}
const mapStateToProps = (state) => (
  {
    location: router(state).location,
    loading: isPlacingOrder(state)
  }
)
const mapDispatchToProps = { placeOrder }

export  default connect(mapStateToProps, mapDispatchToProps)(ButtonCheckout);