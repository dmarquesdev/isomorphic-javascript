import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GoogleMap, SearchBar, Marker } from '../components';
import { fetchPoints, fetchPoint } from '../actions';

class Map extends Component {
  onSearch(term) {
    this.props.fetchPoints({ year: term });
  }

	onMarkerClick(id) {
    this.props.fetchPoint(id);
	}

  markerList(points) {
		return points.map((point) => (
          <Marker
            id={point.idBO}
            key={point.idBO}
            lat={point.lat}
            lng={point.lon}
            onClick={this.onMarkerClick.bind(this)}
          />
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
  const { points: { list } } = state;
  return { points: list };
};

export default connect(mapStateToProps, { fetchPoints, fetchPoint })(Map);
