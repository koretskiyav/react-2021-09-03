import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import { Route, Switch } from 'react-router-dom';
import { Basket } from '../basket';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Restaurants restaurants={this.props.restaurants} />
          </Route>
          <Route path='/basket' exact>
            <Basket />
          </Route>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array
};
