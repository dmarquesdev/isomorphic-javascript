import React from 'react';

import Icon from '../Icon';

const Marker = ({ onClick, id }) => (
  <div className="marker" onClick={() => onClick(id)}>
    <Icon name="map-marker" />
  </div>
);

export default Marker;
