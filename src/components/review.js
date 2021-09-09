import Rate from './rate';

export default function Review({ user, text, rating }) {
  return (
    <article>
      <header>{user}</header>
      <main>{text}</main>
      <footer>
        <Rate value={rating} />
      </footer>
    </article>
  );
}
