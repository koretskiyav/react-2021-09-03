import { ReactComponent as Star } from '../icons/star.svg';
import style from './rate.module.css';

export default function Rate({ rating }) {
  const ratingArr = [];
  const maxRating = (rating > 1 && rating < 5) ? rating : 5;

  for (let i = 1; i <= maxRating; i++) {
    ratingArr.push(i)
  }

    return (
       <div>
         {ratingArr.map((i) => <Star className={style.rate} key={i}/>)}
       </div>
    );
};