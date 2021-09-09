import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant ({ activeRestaurant }) {

  const middleRate = 
    (Object.values(activeRestaurant.reviews)
    .map((insert) => (insert.rating)));

  function middleSum(int) {
    let sum = 0;
    let count = int.length;
    for (let i = 0; i < count; i++) {
      sum += int[i];
    }
    return sum/count;
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
      <Rate review = {middleSum(middleRate)}/>
    </div>
  );
}
