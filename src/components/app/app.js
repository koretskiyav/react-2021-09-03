import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
