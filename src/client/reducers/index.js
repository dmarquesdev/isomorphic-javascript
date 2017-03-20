import { combineReducers } from 'redux';

import PointsReducer from './PointsReducer';

const rootReducer = combineReducers({
  points: PointsReducer
});

export default rootReducer;
