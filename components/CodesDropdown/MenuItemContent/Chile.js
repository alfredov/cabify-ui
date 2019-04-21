import React from 'react';

const SvgComponent = props => (
  <svg style={{ borderRadius: '7.7px' }} width={15} height={15} {...props}>
    <title>CL</title>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__a">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#F0F0F0" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__b">
        <stop stopColor="#EA3B2E" offset="0%" />
        <stop stopColor="#D52B1E" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__c">
        <stop stopColor="#0B48C2" offset="0%" />
        <stop stopColor="#0239A7" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
      <path fill="url(#prefix__b)" d="M0 7h21v8H0z" />
      <path fill="url(#prefix__a)" d="M0 0h21v7H0z" />
      <path fill="url(#prefix__c)" d="M0 0h7v7H0z" />
      <path
        fill="url(#prefix__a)"
        d="M3.5 4.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L3.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377z"
      />
    </g>
  </svg>
);

export default SvgComponent;
