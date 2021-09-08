import {ReactComponent as Star} from '../icons/star.svg';
import style from './rate.module.css';

export default function Rate({ value }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(i);
  }

  return (
    <div>
      {stars.map(number => (number <= value) ? <Star key={number} className={style.star} /> : <Star key={number} />)}
    </div>
  )
}
