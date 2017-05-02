import axios from 'axios';

import { objectToURLParameters } from '../../shared/util';
import config from '../../shared/config';

import {
  FETCH_REPORT_DATA_SUCCESS,
  FETCH_REPORT_DATA_FAILURE,
  START_API_CALL,
  END_API_CALL,
  CHANGE_REPORT_TYPE
} from './types';

const API_URL = process.env.NODE_ENV === 'production' ?
  config.PROD_API_URL :
  config.DEV_API_URL;

export const fetchReportData = (properties) => {
  const params = objectToURLParameters(properties);

  return (dispatch) => {
    dispatch({
      type: START_API_CALL
    });
    axios
      .get(`${API_URL}/report?${params}`)
      .then((response) => {
        dispatch({
          type: FETCH_REPORT_DATA_SUCCESS,
          payload: response.data
        });
        dispatch({
          type: END_API_CALL
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_REPORT_DATA_FAILURE,
          payload: error
        });
        dispatch({
          type: END_API_CALL
        });
      });
  }
};

export const changeReportType = (type, id = null) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_REPORT_TYPE,
      payload: { type, id }
    });
  };
};
