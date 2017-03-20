import _ from 'lodash';

export const objectToURLParameters = (obj) => {
  return _.map(obj, (value, key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }).join('&');
};
