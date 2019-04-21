import React from 'react';

const SvgComponent = props => (
  <svg style={{ borderRadius: '7.7px' }} width={16} height={15} viewBox="0 0 16 15" {...props}>
    <title>MX</title>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__a">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__b">
        <stop stopColor="#E3283E" offset="0%" />
        <stop stopColor="#CC162C" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__c">
        <stop stopColor="#128A60" offset="0%" />
        <stop stopColor="#0B6848" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
      <path fill="url(#prefix__b)" d="M10 0h11v15H10z" />
      <path fill="url(#prefix__c)" d="M0 0h7v15H0z" />
      <path fill="url(#prefix__a)" d="M7 0h7v15H7z" />
      <path
        d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.499 1.499 0 0 1 9 7a.5.5 0 0 0-1 0zm3.846 2.107A2.498 2.498 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842z"
        fill="#8C9157"
        fillRule="nonzero"
      />
      <ellipse fill="#C59262" cx={10.5} cy={6.5} rx={1} ry={1.5} />
    </g>
  </svg>
);

export default SvgComponent;
