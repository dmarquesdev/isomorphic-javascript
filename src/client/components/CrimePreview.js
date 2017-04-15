import React, { Component } from 'react';

import FlatIcon from './FlatIcon';
import { Categories } from '../constants';

const CrimePreview = ({
  date,
  address,
  category,
  person
}) => (
  <div className="preview-tip">
    <div className="preview-tip-icon">
      <FlatIcon name={categoryToFlatIcon(category)} width={48} height={48} />
    </div>

    <div className="preview-tip-text">
      <ul>
        <li className="title">{Categories[category]}</li>
        <li><i className="fa fa-map"></i> {address}</li>
        <li><i className="fa fa-calendar"></i> {date}</li>
        <li><i className="fa fa-user"></i> {person}</li>
      </ul>
    </div>
  </div>
);


const categoryToFlatIcon = (category) => {
  switch(category) {
    default:
      return 'burglar';
  }
};

export default CrimePreview;
