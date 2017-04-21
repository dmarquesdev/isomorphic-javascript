import {
  CHANGE_SEARCH_BAR_TERM,
  CHANGE_SEARCH_BAR_TYPE
} from './types';

export const changeSearchTerm = (term) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_SEARCH_BAR_TERM,
      payload: term
    });
  }
};

export const changeSearchType = (type) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_SEARCH_BAR_TYPE,
      payload: type
    });
  }
};
