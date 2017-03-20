/* This file sould contains the actions and action creators */
import axios from 'axios';

import { objectToURLParameters } from '../../shared/util';

import {
  FETCH_POINTS_SUCCESS,
  FETCH_POINTS_FAILURE
} from './types';

const API_URL = 'http://localhost:8080/criminal-report-api/report';

export const fetchPoints = ({ properties }) => {
  const params = objectToURLParameters(properties);

  return (dispatch) => {
    axios
      .get(`${API_URL}?${params}`)
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
