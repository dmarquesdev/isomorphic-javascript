import React, { Component } from 'react';
import _ from 'lodash';
import { reduxForm } from 'redux-form';

import { SideBar, Icon } from '../components';

import {
  SearchTypes,
  FIELD_TEXT,
  FIELD_SELECT,
  FIELD_NUMERIC
} from '../constants';

import { fetchPoints } from '../actions';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.refs.sidebar.toggle();
  }

  onSubmit(search, callback) {
    this.props.fetchPoints(search);

    if(callback) {
      callback();
    }
  }

  renderFields(fieldConfig, field) {
    const helper = this.props.fields[field];

    let FieldComponent = null;
    if (fieldConfig.type === FIELD_SELECT) {
      FieldComponent = (
        <select
          className="form-control"
          {...helper}
        >
          <option value={null}>-Selecione-</option>
          {
            _.map(fieldConfig.options, (v,k) => {
              return <option key={k} value={k}>{v.label}</option>
            })
          }
        </select>
      );
    } else {
      FieldComponent = (
        <input
          type="text"
          className="form-control"
          {...helper}
        />
      );
    }

    return (
      <div className={`form-group ${helper.touched &&
          helper.invalid ? 'has-danger' : ''}`}>
          <label>{field.label}</label>
          <FieldComponent />
          <div className="text-help">
            {helper.touched ? helper.error : null}
          </div>
        </div>
    );
  }

  render() {
    const { handleSubmit, onSearch } = this.props;
    return (
      <SideBar ref="sidebar">
        <form onSubmit={handleSubmit((props) => this.onSubmit(props, onSearch))}>
          {_.map(SearchTypes, this.renderFields.bind(this))}
          <button type="submit" className="btn btn-primary">
            <Icon name="search"></Icon>
            <span> Pesquisar</span>
          </button>
        </form>
      </SideBar>
    )
  }
}

const validate = (values) => {
  const errors = {};

  _.each(SearchTypes, (config, field) => {
    const value = values[field];

    if(config.type === FIELD_NUMERIC &&
      value != undefined &&
      (
        value < config.minValue ||
        value > config.maxValue
      )) {
      errors[field] = `O valor de '${config.label}'
          deve ser entre ${config.minValue} e ${config.maxValue}`;
    }
  });

  return errors;
};

export default reduxForm({
  form: 'SearchForm',
  fields: _.keys(SearchTypes),
  validate
}, null, { fetchPoints })(SearchForm);
