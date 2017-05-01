import React, { Component } from 'react';

import { FlatIcon } from './common';

import {
  Categories,
  CategoryIcon
} from '../constants';

const CrimePreview = ({
  date,
  address,
  category,
  person
}) => (
  <div className="preview-tip">
    <div className="preview-tip-icon">
      <FlatIcon name={CategoryIcon[category]} width={48} height={48} />
    </div>

    <div className="preview-tip-text">
      <ul>
        <li className="title">{Categories[category.toLowerCase()]}</li>
        <li><i className="fa fa-map"></i> {address}</li>
        <li><i className="fa fa-calendar"></i> {date}</li>
        <li><i className="fa fa-user"></i> {person}</li>
      </ul>
    </div>
  </div>
);


export default CrimePreview;
