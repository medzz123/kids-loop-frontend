import React, { FunctionComponent } from 'react';

import { ButtonProps } from './Button.models';
import { ButtonContainer } from './Button.styles';

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { type = 'button', children, ...rest } = props;

  return (
    // @ts-ignore
    <ButtonContainer type={type} data-testid="button" {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
