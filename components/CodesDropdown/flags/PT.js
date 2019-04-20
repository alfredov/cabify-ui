/* eslint-disable  react/prop-types */
import React from 'react';

const SvgComponent = ({ width = 21, height = 15, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 21 15" {...props}>
    <title>PT</title>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__a">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__b">
        <stop stopColor="#FF2936" offset="0%" />
        <stop stopColor="#FD0D1B" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__c">
        <stop stopColor="#128415" offset="0%" />
        <stop stopColor="#0A650C" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__d">
        <stop stopColor="#FAF94F" offset="0%" />
        <stop stopColor="#F8F736" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__e">
        <stop stopColor="#1D50B5" offset="0%" />
        <stop stopColor="#15439D" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
      <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
      <path fill="url(#prefix__c)" d="M0 0h8v15H0z" />
      <path
        d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        fill="url(#prefix__d)"
        fillRule="nonzero"
      />
      <path
        d="M7 6.256A.25.25 0 0 1 7.245 6h1.51A.25.25 0 0 1 9 6.256V8A.997.997 0 0 1 8 9c-.552 0-1-.443-1-.999V6.256z"
        fill="url(#prefix__a)"
      />
      <path
        d="M8 8c.276 0 .5-.724.5-1a.5.5 0 0 0-1 0c0 .276.224 1 .5 1z"
        fill="url(#prefix__e)"
      />
    </g>
  </svg>
);

export default SvgComponent;
