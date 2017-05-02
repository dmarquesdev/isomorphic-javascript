import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PointsReducer from './PointsReducer';
import LoadingReducer from './LoadingReducer';
import SearchReducer from './SearchReducer';
import ReportReducer from './ReportReducer';

const rootReducer = combineReducers({
  points: PointsReducer,
  loading: LoadingReducer,
  search: SearchReducer,
  report: ReportReducer,
  form: FormReducer
});

export default rootReducer;
