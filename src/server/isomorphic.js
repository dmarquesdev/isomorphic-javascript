import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import routes from '../shared/routes';
import store from '../client/store';

export default (app) => {
  app.get('*', (req, res) => {
    match({ routes, location: req.url }, (error, redirect, props) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirect) {
        res.redirect(redirect.pathname + redirect.search);
      } else if (props) {
        const reactOutput = renderToString(
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        );
        res.render('index.ejs', { reactOutput });
      } else {
        res.status(404).send('Not found!');
      }
    });
  });
};
