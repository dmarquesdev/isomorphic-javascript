import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  GoogleMap,
  SearchBar,
  Marker,
  CrimePreview
} from '../components';
import { fetchPoints, fetchPoint } from '../actions';

class Map extends Component {
  onSearch(term) {
    this.props.fetchPoints({ name: term });
  }

  onMarkerClick(id) {
    this.props.fetchPoint(id);
  }

  markerList(points) {
    return points.map((point) => (
      <Marker
        id={point.idBO}
        key={point.idBO}
        lat={parseFloat(point.lat)}
        lng={parseFloat(point.lon)}
        onClick={this.onMarkerClick.bind(this)}
      >
        <CrimePreview
          date={point.dataOcorrencia}
          address={point.local}
          category={point.categoria}
          person={point.nome}
        />
      </Marker>
    ));
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMap markers={this.markerList(this.props.points)} />
        <div className="map-search-bar">
          <SearchBar onSearch={this.onSearch.bind(this)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { points } = state;
  return { points: points.list, selected: points.selected };
};

export default connect(mapStateToProps, { fetchPoints, fetchPoint })(Map);
