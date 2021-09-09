import style from './reviews.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value, full }) {
  const starsQuantity = new Array(full).fill(0);
  let className;
  console.log();

  return (
    <div>
      {starsQuantity.map((item, index) => {
        let id = new Date().getTime() * Math.random() * 1000;
        index < value ? (className = style.active) : (className = style.icon);
        return <Star key={id} className={className} />;
      })}
    </div>
  );
}
