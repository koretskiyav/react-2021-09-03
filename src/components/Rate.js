import {ReactComponent as EmptyStar} from '../icons/emptyStar.svg';
import {ReactComponent as Star} from '../icons/star.svg';

export default function Rate({ rating }) {
  
  let stars = [];
  for (let i = 0; i < 5; i++) {
    i < rating ? stars.push(<Star key={ i + 1 }/>) : stars.push(<EmptyStar key={ i + 1 }/>)
    
  }

  // for (let i = 0; i < 5 - rating; i++) {
  //   stars.push(<EmptyStar key)
  // }

  return (
    <div>
      {stars}
    </div>
  )
}