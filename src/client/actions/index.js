/* This file sould contains the actions and action creators */
import axios from 'axios';

import { objectToURLParameters } from '../../shared/util';
import config from '../../shared/config';

import {
  FETCH_POINTS_SUCCESS,
  FETCH_POINTS_FAILURE,
  FETCH_POINT_SUCCESS,
  FETCH_POINT_FAILURE
} from './types';

const API_URL = process.env.NODE_ENV === 'production' ?
		config.PROD_API_URL :
		config.DEV_API_URL;

export const fetchPoints = (properties) => {
  const params = objectToURLParameters(properties);

  return (dispatch) => {
    axios
      .get(`${API_URL}/points?${params}`)
      .then((response) => {
        dispatch({
          type: FETCH_POINTS_SUCCESS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POINTS_FAILURE,
          payload: error
        });
      });
  };
};

export const fetchPoint = (id) => (dispatch) => {
  axios
    .get(`${API_URL}/report?idReport=${id}`)
    .then((response) => {
      dispatch({
        type: FETCH_POINT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_POINT_FAILURE,
        payload: error
      });
    });
};
