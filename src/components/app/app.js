import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';
import Error from "../error";

const App = () => {
  const [name, setName] = useState('Andrey');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/restaurants" />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/error" component={Error} />
          <Route path="/thanks" component={() => <h2>Спасибо за заказ</h2>} />
          <Route path="/" component={() => <h2>404 - Not found :(</h2>} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
