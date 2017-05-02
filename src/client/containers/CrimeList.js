import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {
  Card,
  FlatIcon,
  Icon
} from '../components';

import {
  Categories,
  CategoryIcon
} from '../constants';

class CrimeList extends Component {
  renderCrimeList() {
    return this.props.points.map((crime, i) => {
      const categoria = crime.categoria.toLowerCase();
      return (
        <Card key={crime.idBO} className="crime-card">
          <FlatIcon name={CategoryIcon[categoria]} width={50} height={50} />
          <ul className="crime-card-info">
            <li>{Categories[categoria]}</li>
            <li><Icon name="map" /> {crime.local}</li>
            <li><Icon name="calendar" /> {crime.data}</li>
            <li><Icon name="user" /> {crime.nome}</li>
          </ul>
        </Card>
      )
    });
  }

  render() {
    return (
      <div className="crime-list">
        <div className="cards">
          {this.renderCrimeList()}
        </div>
        <Link to="/report" className="btn btn-success">
          <Icon name="print" /> Relatório
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ points }) => {
  return {
    points: points.list
  };
};

export default connect(mapStateToProps)(CrimeList);
