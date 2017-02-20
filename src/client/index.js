import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import routes from '../shared/routes';
import reducers from './reducers';

const INITIAL_STORE = {};

const store = createStore(reducers, INITIAL_STORE, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
      <Router
        history={browserHistory}
        routes={routes}
      />
    </Provider>
  , document.getElementById('root')); // eslint-disable-line no-undef
