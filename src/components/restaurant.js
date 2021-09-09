import Menu from "./menu";
import Reviews from "./reviews";
import Rate from "./rate";

export default function Restaurant({restaurant}) {

	let averageRate = restaurant.reviews.reduce((result, current, index, reviews) => {

		result += current.rating;

		return index === reviews.length -1 ? Math.round(result / reviews.length) : result;
	}, 0);

	return (
		<div>
			<span>Restaurant rate: <Rate value={averageRate} /></span>
			<Menu menu={restaurant.menu} />
			<Reviews reviews={restaurant.reviews} />
		</div>
	)
}