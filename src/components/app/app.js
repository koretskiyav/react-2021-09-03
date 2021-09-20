import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';

export default class App extends PureComponent {
  static propTypes = {
    restaurants: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired
  };

  render() {
    return (
      <div>
        <Header />
        <Restaurants />
      </div>
    );
  }
}
