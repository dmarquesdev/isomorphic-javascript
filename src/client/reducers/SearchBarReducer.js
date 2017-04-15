import {
  CHANGE_SEARCH_BAR_TERM,
  CHANGE_SEARCH_BAR_TYPE
} from '../actions/types';

import {
  SEARCH_TYPE_NAME
} from '../constants';

const INITIAL_STATE = { type: SEARCH_TYPE_NAME, term: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_BAR_TERM:
      return { ...state, term: action.payload };
    case CHANGE_SEARCH_BAR_TYPE:
      return { ...state, term: '', type: action.payload };
    default:
      return state;
  }
};
