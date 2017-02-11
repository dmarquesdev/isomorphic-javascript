import express from 'express';
import path from 'path';

import isomorphic from './isomorphic';

const app = express();
const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '../../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

isomorphic(app);

const server = app.listen(PORT, () => {
  console.log('Express is running on port %s', PORT);
});
