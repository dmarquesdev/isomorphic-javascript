import {
  FETCH_REPORT_DATA_FAILURE,
  FETCH_REPORT_DATA_SUCCESS,
  CHANGE_REPORT_TYPE
} from '../actions/types';

import { ReportTypes } from '../constants';

const INITIAL_STATE = {
  type: ReportTypes.COLLECTION,
  id: null,
  data: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REPORT_DATA_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_REPORT_DATA_FAILURE:
      return { ...INITIAL_STATE, error: action.payload };
    case CHANGE_REPORT_TYPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
