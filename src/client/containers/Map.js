import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GoogleMap, SearchBar } from '../components';
import { fetchPoints } from '../actions';

class Map extends Component {
  onSearch(term) {
    this.props.fetchPoints({ year: term });
  }

  markerList() {
    // TODO make markerlist
    return [];
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

export default connect(mapStateToProps, { fetchPoints })(Map);
