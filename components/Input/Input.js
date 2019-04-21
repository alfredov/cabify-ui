import React from 'react';
import PropTypes from 'prop-types';
import {
  colorBlack,
  colorPositiveLighter,
  colorMain,
  colorFocus,
} from '../utils/vars';
import {
  Field,
  InputStyled,
  InputWrapper,
  Label,
} from './styles';

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
  name,
  required,
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
      onChange(target.value, target.name);
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
          required={required}
          name={name}
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
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  placeholder: null,
  onChange: () => {},
  label: null,
  disabled: false,
  required: false,
};

export default Input;
