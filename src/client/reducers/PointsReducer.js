import {
  FETCH_POINTS_SUCCESS,
  FETCH_POINTS_FAILURE
} from '../actions/types';

const INITIAL_STATE = { list: [], selected: null, error: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POINTS_SUCCESS:
      return { ...state, list: action.payload, selected: null };
    case FETCH_POINTS_FAILURE:
      return { ...INITIAL_STATE, error: action.payload };
    default:
      return state;
  }
};
