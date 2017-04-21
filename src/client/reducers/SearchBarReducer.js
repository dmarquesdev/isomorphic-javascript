import {
  CHANGE_SEARCH_BAR_TERM,
  CHANGE_SEARCH_BAR_TYPE
} from '../actions/types';

const INITIAL_STATE = { type: 'name', term: '' };

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
