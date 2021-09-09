import counter from '../hocs/counter';
import Rate from './rate';

import style from './product.module.css';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

function Product({ product, amount, decrement, increment }) {
  return (
    <div className={style.card}>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <button onClick={decrement}>
        <Minus className={style.icon} />
      </button>
      <span>{amount}</span>
      <button onClick={increment}>
        <Plus className={style.icon} />
      </button>
      <Rate className={style.rate} />
    </div>
  );
}

export default counter(Product);
