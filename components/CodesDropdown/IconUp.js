import React from 'react';
import PropTypes from 'prop-types';

const SvgComponent = ({ width, height, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 8 5" {...props}>
    <title>Icon arrow down</title>
    <path
      d="M4 1.975L1.358 4.618a.804.804 0 0 1-1.14.006.803.803 0 0 1 .006-1.14L3.326.382a.812.812 0 0 1 .672-.234.81.81 0 0 1 .675.234l3.102 3.102a.804.804 0 0 1 .006 1.14.803.803 0 0 1-1.14-.006L4 1.975z"
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
