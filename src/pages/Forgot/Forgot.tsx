import { NextPage } from 'next';
import React from 'react';

import { ForgotContainer, ForgotContent } from './Forgot.styles';

const Forgot: NextPage = () => {
  return (
    <ForgotContainer>
      <ForgotContent>
        <p>Hello, this page us Forgot</p>
      </ForgotContent>
    </ForgotContainer>
  );
};

export default Forgot;
