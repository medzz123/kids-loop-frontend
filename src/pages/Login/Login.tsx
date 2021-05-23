import AuthenticationTemplate from '@components/AuthenticationTemplate';
import { Box } from '@components/Box';
import Button from '@components/Button';
import FormikInput from '@components/FormikInput';
import Link from '@components/Link';
import MessageBox from '@components/MessageBox';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useMutation } from 'react-query';

import { LoginValues } from './Login.models';
import { LoginContainer, LoginContent } from './Login.styles';
import { validateLogIn } from './Login.validate';

const Login: NextPage = () => {
  const router = useRouter();

  const loginMutation = useMutation(
    (login: LoginValues) => {
      return axios.post<{ message: string }, LoginValues>('/api/login', login);
    },
    {
      onSuccess: () => {
        router.push('/');
      },
    }
  );

  const { t } = useTranslation('login', { useSuspense: false });

  return (
    <LoginContainer>
      <LoginContent>
        <AuthenticationTemplate title={t('title')}>
          <Formik<LoginValues>
            initialValues={{
              email: '',
              password: '',
            }}
            validate={(values) => validateLogIn(values, t)}
            onSubmit={(values) => {
              const { email, password } = values;
              loginMutation.mutate({ email: email, password: password });
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                {loginMutation.error && (
                  <Box css={{ mb: '$12' }}>
                    <MessageBox type="error">Your username and password is not correct</MessageBox>
                  </Box>
                )}
                <FormikInput name="email" placeholder={t('emailPlaceholder')} />
                <Box css={{ mb: '$12' }} />
                <FormikInput
                  name="password"
                  type="password"
                  placeholder={t('passwordPlaceholder')}
                />
                <Box css={{ mb: '$12' }} />
                <Box
                  css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Link href="/forgot">{t('forgotLink')}</Link>
                  <Button type="submit">{t('buttonCTA')}</Button>
                </Box>
                <Box css={{ mb: '$40' }} />
                <Link href="/forgot">{t('registerLink')}</Link>
              </Form>
            )}
          </Formik>
        </AuthenticationTemplate>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
