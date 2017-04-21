import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Icon } from '../components';
import {
  fetchPoints,
  changeSearchTerm,
  changeSearchType
} from '../actions';

import {
  SearchTypes,
  FIELD_SELECT
} from '../constants';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.renderSearchField = this.renderSearchField.bind(this);
    this.renderSearchTypes = this.renderSearchTypes.bind(this);
  }

  onSubmit(event, callback) {
    event.preventDefault();

    const { type, term } = this.props;
    const search = {};

    search[type] = term;

    this.props.fetchPoints(search);
    if(callback) {
      callback();
    }
  }

  onSearchChange(event) {
    const term = event.target.value;
    this.props.changeSearchTerm(term);
  }

  onTypeChange(event) {
    const type = event.target.value;
    this.props.changeSearchType(type);
    this.props.changeSearchTerm(SearchTypes[type].defaultValue);
  }

  renderSearchTypes() {
    return (
      <select
        className="form-control search-bar-type"
        value={this.props.type}
        onChange={this.onTypeChange.bind(this)}
      >
        {
          _.map(SearchTypes, (v, k) => {
            return <option key={k} value={k}>{v.label}</option>
          })
        }
      </select>
    )
  }

  renderSearchField() {
    const searchType = SearchTypes[this.props.type];
    const fieldType = searchType.type;

    switch (fieldType) {
      case FIELD_SELECT:
        return (
          <select
            value={this.props.term}
            className="form-control search-bar-value"
            onChange={this.onSearchChange.bind(this)}
          >
            {
              _.map(searchType.values, (v, k) => {
                let keyVal = k;
                if (!isNaN(k)) {
                  keyVal = v;
                }
                return <option key={k} value={keyVal}>{v}</option>
              })
            }
          </select>
        );
      default:
        return (
          <input
            type="text"
            className="form-control search-bar-value"
            placeholder="Insira uma pesquisa..."
            value={this.props.term}
            onChange={this.onSearchChange.bind(this)}
          />
        );
    }
  }

  render() {
    const { onSearch, className } = this.props;

    let cls = 'search-bar';
    if(className) {
      cls += ' ' + className;
    }

    return (
      <form className={cls}
        onSubmit={(event) => this.onSubmit(event, onSearch)}
      >
        <div className="form-group">
          <div className="input-group">
            {this.renderSearchTypes()}
            {this.renderSearchField()}
            <div className="input-group-btn">
              <button
                className="btn btn-primary"
                type="submit"
              >
                <Icon name="search" />
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func
};

const mapStateToProps = ({ searchBar }) => {
  return { ...searchBar };
}

export default connect(
  mapStateToProps, {
    fetchPoints,
    changeSearchTerm,
    changeSearchType
  })(SearchBar);
