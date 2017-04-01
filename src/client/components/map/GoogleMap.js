import React from 'react';
import GoogleMapReact from 'google-map-react';

import config from '../../../shared/config';
import Marker from './Marker';

const GoogleMap = ({ center, zoom, markers }) => {
  const markerList = markers.map((marker) => <Marker {...marker} />);
  return (
    <GoogleMapReact 
		  center={center} 
		  zoom={zoom}
		  bootstrapURLKeys={{ key: config.GMAPS_API_KEY }}
	>
      {markerList}
    </GoogleMapReact>
  );
};

GoogleMap.defaultProps = {
  center: [-23.533773, -46.625290],
  zoom: 12,
  markers: []
};

export default GoogleMap;
