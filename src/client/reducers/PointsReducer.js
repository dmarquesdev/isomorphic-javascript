import {
  FETCH_POINTS_SUCCESS,
  FETCH_POINTS_FAILURE,
  FETCH_POINT_SUCCESS,
  FETCH_POINT_FAILURE
} from '../actions/types';

const INITIAL_STATE = { list: [], selected: null, error: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POINTS_SUCCESS:
      return { ...INITIAL_STATE, list: action.payload };
    case FETCH_POINTS_FAILURE:
      return { ...INITIAL_STATE, error: action.payload };
    case FETCH_POINT_SUCCESS:
      return { ...state, selected: action.payload, error: null };
    case FETCH_POINT_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
