import AuthenticationTemplate from '@components/AuthenticationTemplate';
import { Box } from '@components/Box';
import Button from '@components/Button';
import FormikInput from '@components/FormikInput';
import Link from '@components/Link';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { RegisterValues } from './Register.models';
import { RegisterContainer } from './Register.styles';
import { validateRegister } from './Register.validate';

const Register: NextPage = () => {
  const { t } = useTranslation('register', { useSuspense: false });

  return (
    <RegisterContainer>
      <AuthenticationTemplate title={t('title')}>
        <Formik<RegisterValues>
          initialValues={{
            email: '',
            password: '',
            name: '',
          }}
          validate={(values) => validateRegister(values, t)}
          onSubmit={() => {
            // do nothing
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <FormikInput name="email" placeholder={t('emailPlaceholder')} />
              <Box css={{ mb: '$12' }} />
              <FormikInput name="password" placeholder={t('passwordPlaceholder')} />
              <Box css={{ mb: '$12' }} />
              <FormikInput name="name" placeholder={t('namePlaceholder')} />
              <Box css={{ mb: '$12' }} />
              <Box css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/login">{t('loginLink')}</Link>
                <Button type="submit">{t('buttonCTA')}</Button>
              </Box>
              <Box css={{ mb: '$40' }} />
              <Link href="/forgot">{t('forgotLink')}</Link>
            </Form>
          )}
        </Formik>
      </AuthenticationTemplate>
    </RegisterContainer>
  );
};

export default Register;
