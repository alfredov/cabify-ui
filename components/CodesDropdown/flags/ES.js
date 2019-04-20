/* eslint-disable  react/prop-types */
import React from 'react';

const SvgComponent = ({ width = 15, height = 15, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 15 15" {...props}>
    <title>ES</title>
    <defs>
      <circle id="prefix__a" cx={7.5} cy={7.5} r={7.5} />
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__c">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__d">
        <stop stopColor="#DD172C" offset="0%" />
        <stop stopColor="#C60B1F" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__e">
        <stop stopColor="#FFD133" offset="0%" />
        <stop stopColor="#FFC500" offset="100%" />
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
          d="M0 0h21v4H0zM0 11h21v4H0z"
          transform="translate(-3)"
        />
        <path
          fill="url(#prefix__e)"
          d="M0 4h21v7H0z"
          transform="translate(-3)"
        />
        <path fill="#FFEDB1" d="M2.5 7h1v.5h-1z" />
        <path
          d="M1.915 8.46c.025.295.291.54.585.54s.56-.246.585-.54L3.207 7H1.793l.122 1.46zm-.624-1.465a.456.456 0 0 1 .465-.495h1.488a.45.45 0 0 1 .465.495l-.126 1.506A1.104 1.104 0 0 1 2.5 9.5a1.104 1.104 0 0 1-1.083-.999L1.29 6.995z"
          fill="#A41517"
        />
        <path
          fill="#A41517"
          d="M1.5 7.5h2V8H3l-.5 1L2 8h-.5zM0 6h1v3.5H0zM4 6h1v3.5H4zM1.5 5.5c0-.276.214-.5.505-.5h.99c.279 0 .505.232.505.5v.248c0 .139-.108.252-.245.252h-1.51a.245.245 0 0 1-.245-.252V5.5z"
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
