import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';

import routes from '../shared/routes';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <Router
        history={browserHistory}
        routes={routes}
      />
    </Provider>
  , document.getElementById('root')); // eslint-disable-line no-undef
