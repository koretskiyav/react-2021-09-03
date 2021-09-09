import Menu from './menu';
import Reviews from './reviews/reviews';
import Rate from './reviews/rate';
const summReduser = (prev, curr)=>prev + curr.rating ;

export default function Restaurant({ menu, reviews }){
  const rate = reviews.length>1?reviews.reduce(summReduser,0)/reviews.length: reviews[0].rating;

  return(
    <div>
      <Rate value={rate}/>
      <Menu menu={menu}/>
      <Reviews reviews={reviews}/>
    </div>
  )
}