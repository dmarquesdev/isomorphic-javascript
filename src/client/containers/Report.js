import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { CrimeDetail, Icon } from '../components';
import { fetchReportData } from '../actions';
import { ReportTypes } from '../constants';

class Report extends Component {
  componentWillMount() {
    if(!_.isEmpty(this.props.search) || this.props.id) {
      if(this.props.type === ReportTypes.SINGLE) {
        const search = {};
        search['idReport'] = this.props.id;
        this.props.fetchReportData(search);
      } else {
        this.props.fetchReportData(this.props.search);
      }
    } else {
      this.context.router.push('/');
    }
  }

  componentDidUpdate() {
    responsiveTabs();
  }

  renderReport() {
    const { data } = this.props;
    return data.map((crime, i) => {
      return (
        <div key={crime.idBO} className="report">
          <CrimeDetail crime={crime} layout="report" />
        </div>
      );
    });
  }

  render() {
    return (
      <div id="report-container" className="container">
        <button
          onClick={() => { this.context.router.push('/mapa') }}
          className="btn btn-primary"
        >
          <Icon name="arrow-left" /> Retornar
        </button>
        {this.props.error ? this.props.error : this.renderReport()}
      </div>
    );
  }
}

Report.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    ...state.report,
    search: state.search.properties
  };
};

export default connect(mapStateToProps, { fetchReportData })(Report);
