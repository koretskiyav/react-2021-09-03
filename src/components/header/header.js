import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
// import { CurrencyConsumer } from '../../contexts/currency-context';
import { currencyContext } from '../../contexts/currency-context';

import Button from '../button';
import styles from './header.module.css';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { setCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Igor')}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2>{name}</h2>
        <div>
          <Button onClick={() => setCurrency("dollar")} icon="dollar" secondary small />
          <Button onClick={() => setCurrency("rub")} icon="rub" secondary small />
          <Button onClick={() =>  setCurrency("euro")} icon="euro" secondary small />
        </div>
    </header>
  );
};

export default Header;
