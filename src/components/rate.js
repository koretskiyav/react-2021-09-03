import { ReactComponent as Star } from '../icons/star.svg'
import style from './product.module.css';

export default function Rate(value){
  let stars = [];
  while(value > 0){
    stars.push(<span><Star className={style.star}  key={value}/></span>);
    value--;
  }
  return (
     <div>
       <div style={{"list-style-type": "none"}}>
         {stars.map((star) => (
           star
         ))}
       </div>
     </div>
  );
}