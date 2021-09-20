
import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';
import { userReviewSelector } from '../../../redux/selectors';

const Review = ({ userId, text, rating, name }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {name}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>)
}



const mapStateToProps = (state, props) => {
  return { name: userReviewSelector(state, props.userId) }
};
export default connect(mapStateToProps)(Review);


