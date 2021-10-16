import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider } from '../../contexts/currency-context';
import { useState } from 'react';
import ErrorComponent from '../error-component';

const App = () => {
  const [name, setName] = useState('Andrey');
  const [currency, setCurrency] = useState('$');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{currency, setCurrency}}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={ErrorComponent} />
            <Route path="/" component={() => <h2>404 - Not found :(</h2>} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
