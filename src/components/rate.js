import { ReactComponent as Star } from '../icons/star.svg'
import style from './product.module.css';

export default function Rate({ value }){
  const stars = [];
  while(value > 0){
    stars.push(value);
    value--;
  }
  return (
     <div>
       <div>
         {stars.map((keyValue,index)=>(<span key={index}><Star className={style.star}  /></span>))
         }
       </div>
     </div>
  );
}