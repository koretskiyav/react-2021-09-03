import { ReactComponent as Star } from '../icons/star.svg';
import style from "./star.module.css";

export default function Rate({amount = 0}) {
  return (
    <div className={style.stars}>
      {[...Array(amount).keys()].map((keyValue) => (<Star className={style.star} key={keyValue} />))}
    </div>
  )
}
