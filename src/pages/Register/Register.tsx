import { NextPage } from 'next';
import React from 'react';

import { RegisterContainer, RegisterContent } from './Register.styles';

const Register: NextPage = () => {
  return (
    <RegisterContainer>
      <RegisterContent>
        <p>Hello, this page us Register</p>
      </RegisterContent>
    </RegisterContainer>
  );
};

export default Register;
