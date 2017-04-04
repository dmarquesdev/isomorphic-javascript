import React from 'react';
import GoogleMapReact from 'google-map-react';

import config from '../../../shared/config';

const GoogleMap = ({ center, zoom, markers }) => (
    <GoogleMapReact
      center={center}
      zoom={zoom}
      minZoom={8}
      bootstrapURLKeys={{ key: config.GMAPS_API_KEY }}
    >
      {markers}
    </GoogleMapReact>
);

GoogleMap.defaultProps = {
  center: [-23.533773, -46.625290],
  zoom: 12,
  markers: []
};

export default GoogleMap;
