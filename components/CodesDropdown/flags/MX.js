/* eslint-disable  react/prop-types */
import React from 'react';

const SvgComponent = ({ width = 15, height = 15, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 15 15" {...props}>
    <title>mexico</title>
    <defs>
      <circle id="prefix__a" cx={7.5} cy={7.5} r={7.5} />
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__c">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__d">
        <stop stopColor="#E3283E" offset="0%" />
        <stop stopColor="#CC162C" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__e">
        <stop stopColor="#128A60" offset="0%" />
        <stop stopColor="#0B6848" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__f">
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
        <g transform="translate(-3)">
          <path fill="url(#prefix__c)" d="M0 0h21v15H0z" />
          <path fill="url(#prefix__d)" d="M10 0h11v15H10z" />
          <path fill="url(#prefix__e)" d="M0 0h7v15H0z" />
          <path fill="url(#prefix__f)" d="M7 0h7v15H7z" />
          <path
            d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.499 1.499 0 0 1 9 7a.5.5 0 0 0-1 0zm3.846 2.107A2.498 2.498 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842z"
            fill="#8C9157"
          />
          <ellipse fill="#C59262" cx={10.5} cy={6.5} rx={1} ry={1.5} />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgComponent;
