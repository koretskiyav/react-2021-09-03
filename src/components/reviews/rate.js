import { ReactComponent as Star } from '../../icons/star.svg';
import style from '../rate.module.css'

export default function Rate({ value }) {
  return (
    <div className={style.star_wrapper}>
      {Array.from({length: value}, (v,i) => <Star key={i} className={style.star_icon}/>)}
    </div>
  );
}
