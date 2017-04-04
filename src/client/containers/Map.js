import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  GoogleMap,
  SearchBar,
  Marker,
  Loading
} from '../components';
import { fetchPoints, fetchPoint } from '../actions';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  onSearch(term) {
    this.setState({ loading: true });
    this.props.fetchPoints({ name: term }, () => {
      this.setState({ loading: false })
    });
  }

  onMarkerClick(id) {
    this.setState({ loading: true });
    this.props.fetchPoint(id, () => {
      this.setState({ loading: false })
    });
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
        {this.state.loading && <Loading />}
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
