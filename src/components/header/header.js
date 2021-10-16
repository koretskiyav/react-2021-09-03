import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';
import { currencyContext } from '../../contexts/currency-context';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const {setCurrency} = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Igor')}>

      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2>{name}</h2>
      <ul>
        <li onClick={ ()=>{ setCurrency('$')} } style={{color:'white'} }>$</li>
        <li onClick={ ()=>{ setCurrency('€')} } style={{color:'white'} }>€</li>
        <li onClick={ ()=>{ setCurrency('￡')} } style={{color:'white'} }>￡</li>
      </ul>
    </header>
  );
};

export default Header;
