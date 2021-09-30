import { connect } from 'react-redux';

import styles from '../basket/basket.module.css';
import '../basket/basket.css';
import { orderError } from '../../redux/selectors';

function Basket({ errorMessage }) {
  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>{errorMessage || 'Произошла ошибОчка'}</h4>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: orderError(state)
  };
};


export default connect(mapStateToProps)(Basket);
