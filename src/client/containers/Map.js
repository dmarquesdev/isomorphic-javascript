import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  GoogleMap,
  Marker,
  CrimePreview,
  Icon,
  SideBar,
  CrimeDetail
} from '../components';
import SearchBar from './SearchBar';
import SearchForm from './SearchForm';
import { fetchPoint } from '../actions';

class Map extends Component {
  onMarkerClick(id) {
    this.props.fetchPoint(id, () => {
        this.refs.detail.toggle();
    });
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
    return (
      <div className="map-container">
        <SideBar
          ref="leftSidebar"
          title="Pesquisa"
        >
          <SearchForm onSearch={() => this.refs.leftSidebar.toggle()} />
        </SideBar>
        <div className="map">
          <GoogleMap markers={this.markerList(this.props.points)} />
          <div className="map-search">
            <a
              className="menu-btn"
              onClick={() => this.refs.leftSidebar.toggle()}
            >
              <Icon name="bars" />
            </a>
            <SearchBar className="map-search-bar" />
          </div>
        </div>
        <CrimeDetail ref="detail" crime={this.props.selected} />
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
