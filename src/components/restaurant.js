import Menu from "./menu";
import Reviews from "./reviews";
import RestaurantAvgRating from "./restaurantAvgRating";
import style from "./restaurant.module.css";

export default function Restaurant({ restaurant }) {
  return (
    <div className={style.wrapper}>
      <div className={style.avg}>
        <RestaurantAvgRating reviews={restaurant.reviews} />
      </div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
