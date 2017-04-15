import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PointsReducer from './PointsReducer';
import LoadingReducer from './LoadingReducer';
import SearchBarReducer from './SearchBarReducer';

const rootReducer = combineReducers({
  points: PointsReducer,
  loading: LoadingReducer,
  searchBar: SearchBarReducer 
});

export default rootReducer;
