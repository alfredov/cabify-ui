/* eslint-disable  react/prop-types */
import React from 'react';

const SvgComponent = ({ width = 21, height = 15, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 21 15" {...props}>
    <title>AR</title>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__a">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__b">
        <stop stopColor="#88BBE8" offset="0%" />
        <stop stopColor="#76ADDD" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
      <path fill="url(#prefix__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
      <path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
      <path
        d="M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        fill="#DB7A2C"
        fillRule="nonzero"
      />
      <circle fill="#F4B32E" cx={10.5} cy={7.5} r={1.5} />
    </g>
  </svg>
);

export default SvgComponent;
