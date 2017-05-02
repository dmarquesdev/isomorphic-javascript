import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  GoogleMap,
  Marker,
  MapCaption,
  CrimePreview,
  Icon,
  SideBar,
  CrimeDetail,
  Dialog
} from '../components';

import SearchBar from './SearchBar';
import SearchForm from './SearchForm';
import {
  fetchPoint,
  setSearch,
  changeReportType
} from '../actions';

import {
  CategoryColor,
  ReportTypes
} from '../constants';

class Map extends Component {
  onMarkerClick(id) {
    this.props.changeReportType(ReportTypes.SINGLE, id);

    this.props.fetchPoint(id, () => {
      this.refs.detail.toggle();
    });
  }

  onDetailClose() {
    this.props.changeReportType(ReportTypes.COLLECTION);
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
            color={CategoryColor[point.categoria]}
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
            <SearchBar className="map-search-bar hidden-sm-down" />
          </div>
          <MapCaption />
        </div>

        <Dialog
          ref="detail"
          title="Detalhamento de Ocorrência"
          onClose={this.onDetailClose.bind(this)}
        >
          <CrimeDetail crime={this.props.selected} />
        </Dialog>
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

export default connect(mapStateToProps, {
  fetchPoint,
  setSearch,
  changeReportType
})(Map);
