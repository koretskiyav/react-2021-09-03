import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ restaurant }) {
  function averageСalculationRates(reviews) {
    let ratings = reviews.map((review) => (review.rating));
    return Math.round(ratings.reduce((previousValue, currentValue) =>
      previousValue + currentValue) / ratings.length);
  }

  return (
    <div>
      <Menu menu={restaurant.menu} />
      <hr></hr>
      <Reviews reviews={restaurant.reviews} />
      <h3>Average rating:</h3>
      <Rate value={averageСalculationRates(restaurant.reviews)} />
    </div>
  );
}
