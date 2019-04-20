import React from 'react';
import PropTypes from 'prop-types';

const SvgComponent = ({ width, height, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 8 5" {...props}>
    <title>Icon arrow down</title>
    <path
      d="M3.996 2.935l2.71-2.71A.753.753 0 0 1 7.772.218c.293.293.29.771-.007 1.068L4.598 4.454a.762.762 0 0 1-.606.223.762.762 0 0 1-.599-.223L.225 1.286A.753.753 0 0 1 .218.218a.755.755 0 0 1 1.068.007l2.71 2.71z"
      fill="#A7A7B3"
      fillRule="evenodd"
    />
  </svg>
);

SvgComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

SvgComponent.defaultProps = {
  width: 8,
  height: 5,
};

export default SvgComponent;
