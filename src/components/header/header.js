import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => {
  const { currency, handleChangeCurrency } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <Link to='/restaurants'>
        <Logo />
      </Link>
      <h2 onClick={handleChangeCurrency}>{currency}</h2>
    </header>
  );
};

export default Header;
