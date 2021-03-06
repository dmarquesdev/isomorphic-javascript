import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Map, Report } from '../client/containers';
import { Home } from '../client/components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="mapa" component={Map} />
    <Route path="report" component={Report} />
  </Route>
);
