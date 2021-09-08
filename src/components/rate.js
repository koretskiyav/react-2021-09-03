import { ReactComponent as Star } from '../icons/star.svg'
import style from './product.module.css';

export default function Rate({ value }){
  let stars = [];
  while(value > 0){
    stars.push(value);
    value--;
  }
  return (
     <div>
       <div>
         {stars.map((keyValue)=>(<span><Star className={style.star}  key={Math.random()}/></span>))
         }
       </div>
     </div>
  );
}