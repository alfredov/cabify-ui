import React from 'react';
import styled from '@emotion/styled';

// import SpainIcon from './flags/Spain';
import ChileIcon from './Chile';
import MexicoIcon from './Mexico';
import ColombiaIcon from './Colombia';
// import PeruIcon from './flags/Peru';

import mx from './mx.svg';
import cl from './cl.svg';
import es from './es.svg';
import co from './co.svg';
import pe from './pe.svg';
import ar from './ar.svg';
import br from './br.svg';
import bo from './bo.svg';

export const MenuItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: AvenirNext-Regular;
  font-size: 14px;
  color: #717285;
  line-height: 16px;
`;

export const ContentLeft = styled.div`
  display: flex;
`;

export const ContentLeftText = styled.span`
  margin-left: 16px;
`;

function getFlagIconSource(iconType) {
  switch (iconType) {
    case 'es':
      return es;
    case 'cl':
      return cl;
    case 'mx':
      return mx;
    case 'co':
      return co;
    case 'pe':
      return pe;
    case 'ar':
      return ar;
    case 'br':
      return br;
    case 'bo':
      return bo;
    default:
      return null;
  }
}

export default ({ title, codeNumber, iconFlag }) => {
  const source = getFlagIconSource(iconFlag);
  return (
    <MenuItemContent>
      <ContentLeft>
        <img
          style={{
            width: 15,
            height: 15,
            borderRadius: '7.5px',
            objectFit: 'cover',
          }}
          src={source}
          alt={title}
        />
        <ContentLeftText>{title}</ContentLeftText>
      </ContentLeft>
      <span>
        +
        {codeNumber}
      </span>
    </MenuItemContent>
  );
};
