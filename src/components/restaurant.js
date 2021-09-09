import Menu from './menu';
import Reviews from './reviews';

import styles from './restaurant.module.css';
import Rate from './rate';

export default function Restaurant({ id, name, menu = [], reviews = [] }) {
  const reviewWithRating =
    reviews.map((review) => review.rating).filter((rating) => rating) || [];

  const reviewsAmount = reviewWithRating.length;

  const rate =
    reviewsAmount &&
    reviewWithRating.reduce((agg, item) => agg + item, 0) / reviewsAmount;

  const rateMarkup = rate ? <Rate value={rate}></Rate> : null;
  const reviewsMarkup = reviewsAmount ? (
    <Reviews reviews={reviews}></Reviews>
  ) : (
    <span>No reviews.</span>
  );

  return (
    <div className={styles.restaurant}>
      <header>
        <h1>
          {name} {rateMarkup}
        </h1>
      </header>
      <main>
        <h2>Menu</h2>
        <Menu menu={menu}></Menu>
      </main>
      <footer>
        <h2>Reviews</h2>
        {reviewsMarkup}
      </footer>
    </div>
  );
}
