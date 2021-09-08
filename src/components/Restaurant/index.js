
import Menu from '../menu';
import Reviews from '../Reviews';
import Rate from '../Rate';

export default function Restaurant({ restaurant }) {

  debugger;
  const reviewsCount = restaurant.reviews.length;
  const totalRating = Math.floor(restaurant.reviews.reduce((accum, item) => accum + item.rating, 0) / reviewsCount);

  return (
    <div>
      <div>
        <h3>{restaurant.name}</h3>
        <Rate value={totalRating} maxRate={5} />
      </div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
