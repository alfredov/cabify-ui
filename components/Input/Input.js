import React from 'react';
import PropTypes from 'prop-types';
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
  colorMain,
  colorFocus,
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

function getBorderBottomStyle({ disabled }) {
  if (disabled) {
    return css`border-bottom: dotted 1px ${colorPositiveLighter};`;
  }
  return css`border-bottom: solid 1px ${colorPositiveLighter};`;
}

const Field = styled.div`
  display: flex;
  transition: all ${fastest} ease;
  ${getBorderBottomStyle}
`;

const InputWrapper = styled.div`
  flex: 1 1 100%;
  position: relative;
`;

const InputStyled = styled.input`
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

const Label = styled.label`
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

const types = {
  text: 'text',
  tel: 'tel',
  email: 'email',
};


const Input = ({
  onChange,
  value,
  type,
  placeholder,
  label,
  disabled,
}) => {
  let input = null;
  let field = null;

  function focusHandler() {
    input.style.outlineStyle = 'none';
    input.style.boxShadow = 'none';
    input.style.borderColor = 'transparent';
    input.style.backgroundColor = 'white';
    input.style.color = colorMain;
    field.style.borderColor = colorFocus;
  }

  function blurHandler() {
    input.style.outlineStyle = 'none';
    input.style.boxShadow = 'none';
    input.style.borderColor = 'transparent';
    input.style.backgroundColor = 'white';
    input.style.color = colorBlack;
    field.style.borderBottom = `solid 1px ${colorPositiveLighter}`;
  }

  function changeValueHandler({ target }) {
    if (value === '') {
      onChange(target.value);
      input.value = target.value;
    }
  }

  let extraProps = {};
  if (value !== '') {
    extraProps = { value };
  }

  return (
    <Field
      ref={(node) => { field = node; }}
      disabled={disabled}
    >
      <InputWrapper>
        <InputStyled
          ref={(node) => { input = node; }}
          type={type}
          placeholder={placeholder}
          onChange={changeValueHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          disabled={disabled}
          {...extraProps}
        />
        {label && <Label>{label}</Label>}
      </InputWrapper>
    </Field>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    types.tel,
    types.text,
    types.email,
  ]).isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  placeholder: null,
  onChange: () => {},
  label: null,
  disabled: false,
};

export default Input;
