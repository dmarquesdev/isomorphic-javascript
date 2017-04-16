import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  GoogleMap,
  Marker,
  CrimePreview,
  Icon
} from '../components';
import SearchBar from './SearchBar';
import { fetchPoint } from '../actions';

class Map extends Component {
  onMarkerClick(id) {
    this.props.fetchPoint(id);
  }

  markerList(points) {
    return points.map((point) => {
      const lat = parseFloat(point.lat);
      const lon = parseFloat(point.lon);

      if (!isNaN(lat) && !isNaN(lon)) {
        return (
          <Marker
            id={point.idBO}
            key={point.idBO}
            lat={lat}
            lng={lon}
            onClick={this.onMarkerClick.bind(this)}
          >
            <CrimePreview
              date={point.dataOcorrencia}
              address={point.local}
              category={point.categoria}
              person={point.nome}
            />
          </Marker>
        )
      }
    });
  }

  render() {
    if(this.props.error) {
      console.log(this.props.error);
    }
    return (
      <div className="map-container">
        <GoogleMap markers={this.markerList(this.props.points)} />
        <div className="map-search">
          <a className="menu-btn" href="#"><Icon name="bars" /></a>
          <SearchBar className="map-search-bar" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { points } = state;
  return {
    points: points.list,
    selected: points.selected,
    error: points.error
  };
};

export default connect(mapStateToProps, { fetchPoint })(Map);
