import Rate from './rate';

export default function Reviews({ reviews }) {

  // const o = {
  //   user : Object.values(reviews).map((u) => (
  //     <p key = {u.id}>Пользователь: {u.user}</p>
  //   )),
  //   grade : Object.values(reviews).map((g) => (
  //     <p key = {g.id}>Отзыв: {g.text}</p>
  //   )),
  // }

  const p = Object.values(reviews);

  const reviewList = reviews.map((review) => (
    <Rate key = {reviews.id} review = {review} />
  ))

  return (
    <div>
      {/* <p>
        {o.user}
        {o.grade}
      </p> */}

      {p.map((insert) => (
        <p>
          Пользователь: {insert.user}
        <br/>
          Отзыв: {insert.text}
        <br/>
          <Rate key = {insert.id} review = {insert.rating}/>
        </p>
      ))}
    </div>
  );
}
