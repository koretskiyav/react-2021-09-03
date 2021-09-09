import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ menu, reviews }) {
  let ratingSumm = 0;

  reviews.forEach((reviewItem) => {
    ratingSumm += reviewItem.rating;
  });

  let middleRatingValue = Math.floor(ratingSumm / reviews.length);
  return (
    <div>
      <h2>Middle Rating:</h2>
      <Rate value={middleRatingValue} full={5} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
