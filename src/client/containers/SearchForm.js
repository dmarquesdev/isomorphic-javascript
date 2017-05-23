import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';

import { Icon } from '../components';

import {
  SearchTypes,
  FIELD_TEXT,
  FIELD_SELECT,
  FIELD_NUMERIC
} from '../constants';

import { fetchPoints, setSearch } from '../actions';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.renderFields = this.renderFields.bind(this);
  }

  onSubmit(search, callback) {
    this.props.setSearch(search);
    this.props.fetchPoints(search);

    if(callback) {
      callback();
    }
  }


  renderFields(fieldConfig, field) {
    if (fieldConfig.type === FIELD_SELECT) {
      return (
        <Field
          key={field}
          component={renderSelect}
          name={field}
          label={fieldConfig.label}
        >
          <option>-Selecione-</option>
          {
            _.map(fieldConfig.values, (v, k) => {
              let keyVal = k;
              if(!isNaN(k)) {
                keyVal = v;
              }
              return <option key={k} value={keyVal}>{v}</option>
            })
          }
        </Field>
      );
    } else {
      return (
        <Field
          key={field}
          component={renderInput}
          type="text"
          name={field}
          label={fieldConfig.label}
        />
      );
    }
  }

  render() {
    const { handleSubmit, submitting, onSearch } = this.props;
    return (
      <form
        onSubmit={handleSubmit((props) =>
          this.onSubmit(props, onSearch))}
          className="container-fluid"
        >
          {_.map(SearchTypes, this.renderFields)}
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            <Icon name="search"></Icon>
            <span> Pesquisar</span>
          </button>
        </form>
    )
  }
}

const renderInput = (field) => (
  <div
    className={`form-group ${field.meta.touched &&
      field.meta.invalid ? 'has-danger' : ''}`}
    >
      <label className="form-control-label">{field.label}</label>
      <input
        className="form-control"
        {...field.input}
      />
      <div className="form-control-feedback">
        {field.meta.touched ? field.meta.error : null}
      </div>
    </div>
);

const renderSelect = (field) => (
  <div
    className={`form-group ${field.meta.touched &&
      field.meta.invalid ? 'has-danger' : ''}`}
    >
      <label className="form-control-label">{field.label}</label>
      <select
        className="form-control"
        children={field.children}
        {...field.input}
      />
      <div className="form-control-feedback">
        {field.meta.touched ? field.meta.error : null}
      </div>
    </div>
);

const validate = (values) => {
  const errors = {};

  _.each(SearchTypes, (config, field) => {
    const value = values[field];

    if(config.type === FIELD_NUMERIC &&
      value != undefined) {
      if (isNaN(Number(value))) {
        errors[field] = `${config.label} deve ser um número!`;
      } else if(Number(value) < config.minValue ||
          Number(value) > config.maxValue
      ) {
        errors[field] = `O valor de '${config.label}'
            deve ser entre ${config.minValue} e ${config.maxValue}`;
      }
    }
  });

  return errors;
};

export default connect(null, { fetchPoints, setSearch })(reduxForm({
  form: 'SearchForm',
  fields: _.keys(SearchTypes),
  validate
})(SearchForm));
