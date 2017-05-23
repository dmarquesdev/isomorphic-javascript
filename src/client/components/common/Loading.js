import React from 'react';

import Icon from './Icon';

const Loading = (props) => (
  <div className="overlay">
    <Icon name="refresh" className="loading-icon fa-spin" />
  </div>
);

export default Loading;
