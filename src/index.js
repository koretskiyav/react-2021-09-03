import { Provider } from 'react-redux';
import './index.css';
import { createBrowserHistory } from 'history';

import App from './components/app';
import ReactDOM from 'react-dom';
import { restaurants } from './fixtures';
import store from './redux/store';

// DEV ONLY!!!
window.store = store;

export const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
      <App restaurants={restaurants} />
    </Provider>,
  document.getElementById('root')
);
