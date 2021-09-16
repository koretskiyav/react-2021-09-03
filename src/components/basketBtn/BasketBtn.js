
import { ReactComponent as BasketBtnIcon } from '../../icons/basket.svg';
import { connect } from 'react-redux';
import { showBasket } from '../../redux/actions';

const BasketBtn = ({showBasket}) => {
  return (
    <div onClick={() => showBasket()}>
      <BasketBtnIcon  />
    </div>
  )
};

// const mapDispatchToProps = (dispatch, props) => ({
//   showBasket: () => dispatch(showBasket),
// });

const mapDispatchToProps = (dispatch, props) => ({
  showBasket: () => dispatch(showBasket())
});

export default connect(null, mapDispatchToProps)(BasketBtn);