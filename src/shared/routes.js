import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../client/components/App';

import { Home, Link1, Link2 } from '../client/components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/link1" component={Link1} />
    <Route path="/link2" component={Link2} />
  </Route>
);
