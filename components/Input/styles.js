import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  mainfont,
  colorWhite,
  colorBlack,
  colorPositiveLighter,
  colorPositiveLight,
  fontSizeXs,
  spacing,
  fastest,
  fontSizeS,
  spacingNumber,
  colorFbNegative,
} from '../utils/vars';

function getDisableStyles({ disabled }) {
  if (disabled) {
    return css`
      color: ${colorPositiveLighter};
      cursor: not-allowed;
    `;
  }
  return css``;
}

function getBorderBottomStyle({ disabled, error }) {
  if (disabled) {
    return css`border-bottom: dotted 1px ${colorPositiveLighter};`;
  }
  if (error) {
    return css`border-bottom: solid 1px ${colorFbNegative};`;
  }
  return css`border-bottom: solid 1px ${colorPositiveLighter};`;
}

export const Field = styled.div`
  display: flex;
  transition: all ${fastest} ease;
  ${getBorderBottomStyle}
`;

export const InputWrapper = styled.div`
  flex: 1 1 100%;
  position: relative;
`;

export const InputStyled = styled.input`
  &:-webkit-autofill {
    box-shadow: 0 0 0 30px ${colorWhite} inset;
  }

  border: 0;
  color: ${colorBlack};
  font-family: ${mainfont};
  background-color: transparent;
  padding: ${spacingNumber * 2}px 0 ${spacing};
  width: 100%;
  font-size: ${fontSizeS};
  line-height: 16px;
  ${getDisableStyles}
`;

export const Label = styled.label`
  color: ${colorPositiveLight};
  font-size: ${fontSizeXs};
  line-height: 16px;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  transition: all ${fastest} ease;
`;
