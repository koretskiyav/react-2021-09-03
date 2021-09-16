import { Provider } from 'react-redux';
import './index.css';
import { createBrowserHistory } from 'history';

import App from './components/app';
import ReactDOM from 'react-dom';
import { restaurants } from './fixtures';
import store from './redux/store';
import { Router } from 'react-router-dom';

// DEV ONLY!!!
window.store = store;

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App restaurants={restaurants} />
    </Provider>
  </Router>,
  document.getElementById('root')
);
