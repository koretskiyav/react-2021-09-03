import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider } from '../../contexts/currency-context';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('Andrey');
  const [currency, setCurrency] = useState('dollar');

  const currencyTable = {
    'dollar': {
      value: 1,
      icon: '$'
    },
    "euro": {
      value: 0.86,
      icon: '€'
    },
    'rub': {
      value: 72.78,
      icon: '₽'
    }
  }

  const change = (price) => {
    return {
      price: price * currencyTable[currency].value,
      currency: currencyTable[currency].icon
    }
  }

  return (
    <div>
      <UserProvider value={{ name, setName }}>
      <CurrencyProvider value={{currency, setCurrency, change}}>
        <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={() => <h2>Error Page!</h2>} />
            <Route path="/" component={() => <h2>404 - Not found :(</h2>} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
