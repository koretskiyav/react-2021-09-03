import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import {useMemo} from 'react';

export default function Restaurant({restaurant}){
   const reviews = Array.isArray(restaurant.reviews) ? restaurant.reviews : [{rating: 3}];
   const overallRate = useMemo(()=>{
     let sumRate = 0;
     let overallRate = 0.0;
     reviews.forEach((review) =>{
       sumRate += review.rating;
     })
     overallRate =  sumRate / reviews.length;
     return overallRate;
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