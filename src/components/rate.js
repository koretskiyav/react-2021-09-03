import { ReactComponent as Star } from '../icons/star.svg'
import style from './product.module.css';

export default function Rate({ value }){
  const stars = [1,2,3,4,5];
  return (
     <div>
       <div>
         {stars.map((keyValue,index)=>{
           if(index <= value){
              return (<span key={index}><Star className={style.star}  /></span>);
           }
           })
         }
       </div>
     </div>
  );
}