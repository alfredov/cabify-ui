import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  colorWhite,
  fontSizeXl,
  colorMoradulDark,
  colorMoradul,
  colorMoradulLight,
  boldWeight,
  colorShadowLight,
  alpha16,
} from '../utils/vars';

const state = {
  default: 'default',
  active: 'active',
  disabled: 'disabled',
};

const size = {
  default: 'default',
  small: 'small',
  medium: 'medium',
};

function getStateStyles({ appearance }) {
  switch (appearance) {
    case state.active:
      return css`background-color: ${colorMoradulDark}; cursor: pointer;`;
    case state.disabled:
      return css`background-color: ${colorMoradul}; opacity: 0.3;`;
    default:
      return css`background-color: ${colorMoradul}; cursor: pointer;`;
  }
}

function getWidthStyle(props) {
  switch (props.size) {
    case size.small:
      return css`min-width: 150px;`;
    case size.medium:
      return css`min-width: 372px;`;
    default:
      return css`width: 100%;`;
  }
}

const ButtonStyled = styled.button`
  box-shadow: 0 1px 4px 0 ${colorShadowLight}, inset 0 1px 1px 0 rgba(${colorWhite}, ${alpha16});
  height: 56px;
  border-radius: 8px;
  font-family: 'AvenirNext-DemiBold';
  font-weight: ${boldWeight};
  font-size: ${fontSizeXl};
  color: ${colorWhite};
  text-align: center;
  line-height: 32px;
  padding: 0 20px;
  &:hover {
    background-color: ${colorMoradulLight};
  }
  ${getStateStyles}
  ${getWidthStyle}
`;

const Button = ({
  children,
  appearance,
  onClick,
  size: sizeProp,
}) => (
  <ButtonStyled
    onClick={onClick}
    disabled={appearance === state.disabled}
    appearance={appearance}
    size={sizeProp}
  >
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  appearance: PropTypes.oneOf([
    state.default,
    state.active,
    state.disabled,
  ]),
  size: PropTypes.oneOf([
    size.default,
    size.small,
    size.medium,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  appearance: state.default,
  size: size.default,
  onClick: () => {},
};

export default Button;
