import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';
import style from './restaurant.module.css'

export default function Restaurant({ restaurant }) {
  let average = restaurant.reviews.reduce((sum, current) => sum + current.rating, 0) / restaurant.reviews.length;

  return (
    <div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <div className={style.average}>
        <span>Average rating of restaurant: </span>
        <Rate value={average} />
      </div>
    </div>
  )
}