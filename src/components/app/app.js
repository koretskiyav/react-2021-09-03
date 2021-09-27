import { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Redirect from="/" exact to="/restaurants"/>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/" component={() => <h2>404 - Not found :(</h2>} />
        </Switch>
      </div>
    );
  }
}
