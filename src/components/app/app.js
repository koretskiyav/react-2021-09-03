import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import ErrorOrder from '../error';

import { UserProvider } from '../../contexts/user-context';
import { useState } from 'react';

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
          <Route path="/error" component={ErrorOrder} />
          <Route path="/success" component={() => <h2>Success Page!</h2>} />
          <Route path="/" component={() => <h2>404 - Not found :(</h2>} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
