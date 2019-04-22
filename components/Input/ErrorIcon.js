/* eslint-disable react/prop-types */
import React from 'react';

const SvgComponent = ({ width = 14, height = 14, ...props }) => (
  <svg
    style={{ position: 'absolute', right: 0, bottom: '16px' }}
    width={width}
    height={height}
    viewBox="0 0 14 14"
    {...props}
  >
    <title>Icon 1</title>
    <path
      d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM6 4v4h2V4H6zm0 5v1h2V9H6z"
      fill="#FC5959"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
