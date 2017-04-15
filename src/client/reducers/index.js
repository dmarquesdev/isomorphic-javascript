import { combineReducers } from 'redux';

import PointsReducer from './PointsReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  points: PointsReducer, 
  loading: LoadingReducer
});

export default rootReducer;
