import AuthenticationTemplate from '@components/AuthenticationTemplate';
import { Box } from '@components/Box';
import Button from '@components/Button';
import Link from '@components/Link';
import TextInput from '@components/TextInput';
import { NextPage } from 'next';
import React from 'react';

import { LoginContainer, LoginContent } from './Login.styles';

const Login: NextPage = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <AuthenticationTemplate title="Sign in">
          <TextInput placeholder="Email or Phone *" />
          <Box css={{ mb: '$12' }} />
          <TextInput placeholder="Password *" />
          <Box css={{ mb: '$12' }} />
          <Box css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/forgot">Forgot Password?</Link>
            <Button>Sign In</Button>
          </Box>
          <Box css={{ mb: '$40' }} />
          <Link href="/forgot">Create Account?</Link>
        </AuthenticationTemplate>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
