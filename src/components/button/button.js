import cn from 'classnames';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import styles from './button.module.css';

import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { ReactComponent as Dollar } from '../../icons/dollar-currency.svg';
import { ReactComponent as Euro } from '../../icons/euro-currency.svg';
import { ReactComponent as Rubble } from '../../icons/currency-rub.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
  delete: DeleteIcon,
  dollar: Dollar,
  euro: Euro,
  rub: Rubble
};

const Button = ({
  icon,
  children,
  primary = false,
  secondary = false,
  small = false,
  block = false,
  busy = false,
  onClick,
}) => {
  const Icon = icons[icon];
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.small]: small,
        [styles.block]: block,
        [styles.busy]: busy
      })}
      disabled={busy}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  block: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  busy: state.button.busy
})

export default connect(mapStateToProps)(Button);
