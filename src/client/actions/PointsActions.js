import axios from 'axios';

import { objectToURLParameters } from '../../shared/util';
import config from '../../shared/config';

import {
  FETCH_POINTS_SUCCESS,
  FETCH_POINTS_FAILURE,
  FETCH_POINT_SUCCESS,
  FETCH_POINT_FAILURE,
  START_API_CALL,
  END_API_CALL
} from './types';

const API_URL = process.env.NODE_ENV === 'production' ?
  config.PROD_API_URL :
  config.DEV_API_URL;

export const fetchPoints = (properties) => {
  const params = objectToURLParameters(properties);

  return (dispatch) => {
    dispatch({
      type: START_API_CALL
    });
    axios
      .get(`${API_URL}/points?${params}`)
      .then((response) => {
        if (response.data.length) {
          dispatch({
            type: FETCH_POINTS_SUCCESS,
            payload: response.data
          });
        } else {
          dispatch({
            type: FETCH_POINTS_FAILURE,
            payload: 'Nenhum resultado encontrado!'
          });
        }
        dispatch({
          type: END_API_CALL
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POINTS_FAILURE,
          payload: 'Erro ao processar consulta!'
        });
        dispatch({
          type: END_API_CALL
        });
      });
  };
};

export const fetchPoint = (id, callback) => (dispatch) => {
  dispatch({
    type: START_API_CALL,
  });
  axios
    .get(`${API_URL}/report?idReport=${id}`)
    .then((response) => {
      dispatch({
        type: FETCH_POINT_SUCCESS,
        payload: response.data[0]
      });
      dispatch({
        type: END_API_CALL
      });
      if(callback) {
        callback();
      }
    })
    .catch((error) => {
      dispatch({
        type: FETCH_POINT_FAILURE,
        payload: 'Erro ao processar dados da ocorrência!'
      });
      dispatch({
        type: END_API_CALL
      });
    });
};
