import React from 'react';
import PropTypes from 'prop-types';
import { countryCodes } from '../data';

import {
  Content,
  ContentLeft,
  ContentLeftText,
  ImageFlag,
} from './styles';

import mx from './icons/mx.svg';
import cl from './icons/cl.svg';
import es from './icons/es.svg';
import co from './icons/co.svg';
import pe from './icons/pe.svg';
import ar from './icons/ar.svg';
import br from './icons/br.svg';
import bo from './icons/bo.svg';
import uy from './icons/uy.svg';

function getFlagIconSource(iconType) {
  switch (iconType) {
    case countryCodes.spain:
      return es;
    case countryCodes.chile:
      return cl;
    case countryCodes.mexico:
      return mx;
    case countryCodes.colombia:
      return co;
    case countryCodes.peru:
      return pe;
    case countryCodes.argentina:
      return ar;
    case countryCodes.brazil:
      return br;
    case countryCodes.bolivia:
      return bo;
    case countryCodes.uruguay:
      return uy;
    default:
      return null;
  }
}

const MenuItemContent = ({ title, codeNumber, iconFlag }) => {
  const source = getFlagIconSource(iconFlag);
  return (
    <Content>
      <ContentLeft>
        <ImageFlag
          src={source}
          alt={title}
        />
        <ContentLeftText>{title}</ContentLeftText>
      </ContentLeft>
      <span>
        +
        {codeNumber}
      </span>
    </Content>
  );
};

MenuItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  codeNumber: PropTypes.string.isRequired,
  iconFlag: PropTypes.oneOf([
    countryCodes.spain,
    countryCodes.chile,
    countryCodes.mexico,
    countryCodes.colombia,
    countryCodes.peru,
    countryCodes.argentina,
    countryCodes.brazil,
    countryCodes.bolivia,
    countryCodes.uruguay,
  ]).isRequired,
};

export default MenuItemContent;
