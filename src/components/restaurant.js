import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant ({ activeRestaurant }) {

  const middleRate = 
    (Object.values(activeRestaurant.reviews)
    .map((insert) => (insert.rating)));

  function middleSum() {
    for (let i = 0; i < middleRate.length - 1; i++) {
      let sum = middleRate[i] + middleRate[i + 1];
      return sum / middleRate.length;
    }
  }

  return (
    <div>
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} />
      {/* <p>
        Средний рейтинг:
          {middleRate.map((insert) => (
          <Rate key = {insert.key} review = {insert.rating / 2}/>
        ))}
      </p> */}
      <p>Средний рейтинг:</p>
      <Rate review = {middleSum()}/>
    </div>
  );
}
