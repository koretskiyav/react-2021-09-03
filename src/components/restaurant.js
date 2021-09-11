import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import {useMemo} from 'react';

export default function Restaurant({restaurant}){
   const reviews = restaurant.reviews;
   const overallRate = useMemo(()=>{
     const sumRate = reviews.reduce((sum, review)=> sum + review.rating, 0);
     return sumRate/reviews.length;
   },[reviews])
    return (
      <div>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
        <h4>Overall rate</h4>
        <Rate value={overallRate} />
      </div>
    )
}