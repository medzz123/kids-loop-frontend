import React, { FunctionComponent } from 'react';

import { TextInputProps } from './TextInput.models';
import { StyledTextInput } from './TextInput.styles';

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  const { onChange, value, name, onFocus, onBlur, placeholder } = props;
  return (
    <StyledTextInput
      data-testid="textInput"
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      name={name}
    />
  );
};

export default TextInput;
