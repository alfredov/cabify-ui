/* eslint-disable  react/prop-types */
import React from 'react';

const SvgComponent = ({ width = 15, height = 15, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 15 15" {...props}>
    <title>chile</title>
    <defs>
      <circle id="prefix__a" cx={7.5} cy={7.5} r={7.5} />
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__c">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__d">
        <stop stopColor="#EA3B2E" offset="0%" />
        <stop stopColor="#D52B1E" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__e">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__f">
        <stop stopColor="#0B48C2" offset="0%" />
        <stop stopColor="#0239A7" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__g">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
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
          d="M0 7h21v8H0z"
          transform="translate(-3)"
        />
        <path
          fill="url(#prefix__e)"
          d="M0 0h21v7H0z"
          transform="translate(-3)"
        />
        <path
          fill="url(#prefix__f)"
          d="M0 0h7v7H0z"
          transform="translate(-3)"
        />
        <path
          fill="url(#prefix__g)"
          d="M3.5 4.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L3.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377z"
          transform="translate(-3)"
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
