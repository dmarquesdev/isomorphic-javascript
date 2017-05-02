import {
  CHANGE_SEARCH_BAR_TERM,
  CHANGE_SEARCH_BAR_TYPE,
  SET_COMPLETE_SEARCH
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

export const setSearch = (search) => {
  return (dispatch) => {
    dispatch({
      type: SET_COMPLETE_SEARCH,
      payload: search
    });
  }
};
