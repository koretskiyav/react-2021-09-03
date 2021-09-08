import Menu from './menu';
import Rate from './Rate';
import Reviews from './Reviews';

export default function Restaurant({ restaurant }) {

  let reviews = restaurant.reviews;
  let rating = Math.round(reviews.reduce((acc, val) => acc + val.rating, 0) / reviews.length);

  return (
    <div>
      <Rate rating={rating}/>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={reviews} />
    </div>
  )
}