import cn from 'classnames';
import PropTypes from 'prop-types';


import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';

const Rate = ({ value }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(styles.star, { [styles.checked]: i <= value - 1 })}
      />
    ))}
  </div>
);

Rate.defaultProps = {
  value: 0,
};

Rate.propTypes = {
  value: PropTypes.number,
};

export default Rate;
