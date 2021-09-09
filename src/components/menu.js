import Product from './product';
import style from './menu.module.css';

export default function Menu({ menu }) {
  return (
    <div className={style.card}>
      <h2 className={style.cardTitle}>Menu</h2>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
