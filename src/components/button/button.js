import styles from './button.module.css';
import PropTypes from 'prop-types';

import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
};

const Button = ({ icon, onClick, dataId }) => {
  const Icon = icons[icon];
  return (
    <button className={styles.button} onClick={onClick} data-id={dataId}>
      {Icon && <Icon />}
    </button>
  );
};

export default Button;

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
  // Проп data-id решил не проверять, так как он нужен для тестов. Как на практике, тестовые атрибуты тоже в propTypes загоняют?
}
