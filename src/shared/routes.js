import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../client/components/App';

import { Home } from '../client/components';
import { Map } from '../client/containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="mapa" component={Map} />
  </Route>
);
