import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => {
  const { currency, setCurrency, currencyList } = useContext(userContext);

  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2></h2>
      <div className={styles.currency} >
        <select id="currency" onChange={(event) => setCurrency(event.target.value)} value={currency}>
          {
            currencyList.map((val) => <option value={val}>{val}</option>)
          }
        </select>
      </div>
    </header>
  );
};

export default Header;
