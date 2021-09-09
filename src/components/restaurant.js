import Menu from './menu';
import Reviews from './rewiews';
import Rate from './rate';

export default function Restaurant({ menu, reviews }) {
  const raitingArr = reviews.map((review) => review.rating);
  const averageRaiting = raitingArr.reduce((total, amount, index, array) => {
    total += amount;
    if( index === array.length-1) {
      return Math.round(total/array.length);
    }else {
      return total;
    }
  });

  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      Средний рейтинг
      <Rate rating={averageRaiting} />
    </div>
  );
}