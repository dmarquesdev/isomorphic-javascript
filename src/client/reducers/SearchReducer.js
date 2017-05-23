import {
  CHANGE_SEARCH_BAR_TERM,
  CHANGE_SEARCH_BAR_TYPE,
  SET_COMPLETE_SEARCH
} from '../actions/types';

const INITIAL_STATE = { type: 'name', term: '', properties: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_BAR_TERM:
      return { ...state, term: action.payload };
    case CHANGE_SEARCH_BAR_TYPE:
      return { ...state, term: '', type: action.payload };
    case SET_COMPLETE_SEARCH:
      return { ...state, properties: action.payload };
    default:
      return state;
  }
};
