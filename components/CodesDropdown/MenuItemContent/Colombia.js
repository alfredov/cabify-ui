import React from 'react';

const SvgComponent = props => (
  <svg style={{ borderRadius: '7.7px' }} width={15} height={15} {...props}>
    <title>CO</title>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__a">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__b">
        <stop stopColor="#0748AE" offset="0%" />
        <stop stopColor="#003993" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__c">
        <stop stopColor="#DE2035" offset="0%" />
        <stop stopColor="#CE1126" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__d">
        <stop stopColor="#FFD935" offset="0%" />
        <stop stopColor="#FDD216" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
      <path fill="url(#prefix__b)" d="M0 7h21v4H0z" />
      <path fill="url(#prefix__c)" d="M0 11h21v4H0z" />
      <path fill="url(#prefix__d)" d="M0 0h21v7H0z" />
    </g>
  </svg>
);

export default SvgComponent;
