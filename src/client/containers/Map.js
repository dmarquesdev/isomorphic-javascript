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
import CrimeList from './CrimeList';

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

  goToResults() {
    $('.nav-tabs a[href="#dados-tab"]').tab('show');
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
        >
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                href="#pesquisa-tab"
                className="nav-link active"
                data-toggle="tab"
                role="tab"
              >
                Pesquisa
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#dados-tab"
                className="nav-link"
                data-toggle="tab"
                role="tab"
              >
                Resultados
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="pesquisa-tab" className="tab-pane active" role="tabpanel">
              <SearchForm onSearch={this.goToResults.bind(this)} />
            </div>

            <div id="dados-tab" className="tab-pane" role="tabpanel">
              <CrimeList onCardClick={this.onMarkerClick.bind(this)} />
            </div>
          </div>
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
            <SearchBar onSearch={this.goToResults.bind(this)} className="map-search-bar hidden-sm-down" />
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
