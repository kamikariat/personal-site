import React from 'react';
import PropTypes from 'prop-types';

import Extra from './Extracurriculars/Extra';

const Extracurriculars = ({ data }) => (
  <div className="extracurriculars">
    <div className="link-to" id="extracurriculars" />
    <div className="title">
      <h3>Extracurriculars</h3>
    </div>
    {data.map((extra) => (
      <Extra
        data={extra}
        key={extra.company}
      />
    ))}
  </div>
);

Extracurriculars.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Extracurriculars.defaultProps = {
  data: [],
};

export default Extracurriculars;
