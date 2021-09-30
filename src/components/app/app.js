import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserContextProvider } from '../../contexts/user-context';
import { ErrorPage } from '../errorPage';

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/restaurants" />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/success" component={() => <h2>Спасибо за заказ!</h2>} />
          <Route path="/" component={() => <h2>404 - Not found :(</h2>} />
        </Switch>
      </UserContextProvider>
    </div>
  );
};

export default App;
