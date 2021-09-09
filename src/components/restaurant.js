import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';

export default function Restaurant({ restaurant }) {

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  const ratingReviews = restaurant.reviews.map(review => review.rating);
  const averageRating = ratingReviews.reduce(reducer) / ratingReviews.length;

  return (
    <div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews}/>
      <h3>Average rating</h3>
      <Rate rating={averageRating}/>
    </div>
  );
}
