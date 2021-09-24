import Product from '../product';
import Basket from '../basket';
import styles from './menu.module.css';
const Menu = ({ menu, restId }) => {

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
}


export default Menu;
