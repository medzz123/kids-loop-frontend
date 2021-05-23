import AuthenticationTemplate from '@components/AuthenticationTemplate';
import { Box } from '@components/Box';
import Button from '@components/Button';
import FormikInput from '@components/FormikInput';
import Link from '@components/Link';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { ForgotValues } from './Forgot.models';
import { ForgotContainer } from './Forgot.styles';
import { validateForgotPassword } from './Forgot.validate';

const Forgot: NextPage = () => {
  const { t } = useTranslation('forgot', { useSuspense: false });

  return (
    <ForgotContainer>
      <AuthenticationTemplate title={t('title')}>
        <Formik<ForgotValues>
          initialValues={{
            email: '',
          }}
          validate={(values) => validateForgotPassword(values, t)}
          onSubmit={() => {
            // do nothing
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <FormikInput name="email" placeholder={t('emailPlaceholder')} />
              <Box css={{ mb: '$12' }} />
              <Box css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/login">{t('loginLink')}</Link>
                <Button type="submit">{t('buttonCTA')}</Button>
              </Box>
              <Box css={{ mb: '$40' }} />
              <Link href="/forgot">{t('registerLink')}</Link>
            </Form>
          )}
        </Formik>
      </AuthenticationTemplate>
    </ForgotContainer>
  );
};

export default Forgot;
