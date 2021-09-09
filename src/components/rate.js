import style from './rate.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  const isFillStarClass = (index) => {
    return rating >= index + 1 ? style.iconFill : '';
  }

  return (
    <div className={style.rating}>
      {stars.map((star, index) => (
        <Star key={index} className={`${style.icon} ${isFillStarClass(index)}`} />
      ))}
    </div>
  );
}
