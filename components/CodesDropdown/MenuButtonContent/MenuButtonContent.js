import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import IconDown from './IconDown';
import IconUp from './IconUp';
import {
  PrefixWrapper,
  PrefixCode,
  PrefixTitle,
  IconSpan,
} from './styles';

const MenuButtonContent = ({ prefix, isOpen }) => (
  <Fragment>
    <PrefixWrapper>
      <PrefixTitle>Prefix</PrefixTitle>
      <PrefixCode>
        +
        {prefix}
      </PrefixCode>
    </PrefixWrapper>
    <IconSpan aria-hidden>
      {isOpen ? <IconUp /> : <IconDown />}
    </IconSpan>
  </Fragment>
);

MenuButtonContent.propTypes = {
  prefix: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuButtonContent;
