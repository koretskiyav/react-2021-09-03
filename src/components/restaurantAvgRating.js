import Rate from "./rate";

export default function RestaurantAvgRating({ reviews }) {
  let rateSum = reviews.map((review) => (review.rating)).reduce((sum, rate) => sum + rate)
  let rateCount = reviews.length
  let rateAvg = Math.round(rateSum / rateCount)

  return (
    <div>
      <h3>Average rating from reviews</h3>
      <Rate amount={rateAvg} />
    </div>
  );
}
