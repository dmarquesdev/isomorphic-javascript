import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  GoogleMap,
  SearchBar,
  Marker,
  Loading,
  CrimePreview
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
      this.setState({ loading: false });
    });
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
  const { points } = state;
  return { points: points.list, selected: points.selected };
};

export default connect(mapStateToProps, { fetchPoints, fetchPoint })(Map);
