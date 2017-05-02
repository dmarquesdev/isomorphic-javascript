import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { CrimeDetail } from '../components';
import { fetchReportData } from '../actions';
import { ReportTypes } from '../constants';

class Report extends Component {
  componentWillMount() {
    if(this.props.type === ReportTypes.SINGLE) {
      const search = {};
      search['idReport'] = this.props.id;
      this.props.fetchReportData(search);
    } else {
      this.props.fetchReportData(this.props.search);
    }
  }

  componentDidUpdate() {
    responsiveTabs();
  }

  renderReport() {
    const { data } = this.props;
    return data.map((crime, i) => {
      return (
        <div className="report">
          <CrimeDetail key={crime.idBO} crime={crime} layout="report" />
        </div>
      );
    });
  }

  render() {
    return (
      <div id="report-container" className="container">
        {this.props.error ? this.props.error : this.renderReport()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.report,
    search: state.search.properties
  };
};

export default connect(mapStateToProps, { fetchReportData })(Report);
