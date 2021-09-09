import Rate from './rate';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      <tr></tr><tr></tr>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.user}</h3>
          <h4>{review.text}</h4>
          <Rate value={review.rating}/>
          <tr></tr><tr></tr>
        </div>
      ))}
    </div>
  );
}
