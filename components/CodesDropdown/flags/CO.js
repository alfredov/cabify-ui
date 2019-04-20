/* eslint-disable  react/prop-types */
import React from 'react';

const SvgComponent = ({ width = 15, height = 15, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 15 15" {...props}>
    <title>colombia</title>
    <defs>
      <circle id="prefix__a" cx={7.5} cy={7.5} r={7.5} />
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__c">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__d">
        <stop stopColor="#0748AE" offset="0%" />
        <stop stopColor="#003993" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__e">
        <stop stopColor="#DE2035" offset="0%" />
        <stop stopColor="#CE1126" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__f">
        <stop stopColor="#FFD935" offset="0%" />
        <stop stopColor="#FDD216" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <use fill="#D8D8D8" xlinkHref="#prefix__a" />
      <g mask="url(#prefix__b)" fillRule="nonzero">
        <path
          fill="url(#prefix__c)"
          d="M0 0h21v15H0z"
          transform="translate(-3)"
        />
        <path
          fill="url(#prefix__d)"
          d="M0 7h21v4H0z"
          transform="translate(-3)"
        />
        <path
          fill="url(#prefix__e)"
          d="M0 11h21v4H0z"
          transform="translate(-3)"
        />
        <path
          fill="url(#prefix__f)"
          d="M0 0h21v7H0z"
          transform="translate(-3)"
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
