import Rate from '../Rate';
import style from './index.module.css';

export default function Review({ user, text, rating }) {
  return (
    <div className={style['card-review']}>
      <div className={style.header}>
        <div><span>{user}</span></div>
        <Rate value={rating} maxRate={5} />
      </div>
      <div className={style.text}>
        <i>{text}</i>
      </div>
    </div>
  )
}