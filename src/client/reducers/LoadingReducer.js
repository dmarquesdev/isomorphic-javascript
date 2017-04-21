import {
  START_API_CALL,
  END_API_CALL
} from '../actions/types';

const INITIAL_STATE = { show: false };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case START_API_CALL:
      return { ...state, show: true };
    case END_API_CALL:
      return { ...state, show: false };
    default:
      return state;
  }
}
