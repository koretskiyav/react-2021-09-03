import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as StarFull } from '../icons/star_full.svg';

import style from './rate.module.css';

export default function Rate({ rate, id }) {
  const stars = [];

  for (let i=0; i < 5; i++) {
    i < rate ? stars.push(<StarFull key={id +'_'+ i} className={style.icon}/>) : stars.push(<Star key={id +'_'+ i} className={style.icon}/>)
  }

  return (
    <div key={id} className={style.rate}>{stars}</div>
  );
}