import { FormikErrors } from 'formik';
import { TFunction } from 'next-i18next';

import { LoginValues } from './Login.models';

export const validateLogIn = (values: LoginValues, t: TFunction) => {
  const errors: FormikErrors<LoginValues> = {};
  if (!values.email) {
    errors.email = t('usernameError');
  }

  if (!values.password) {
    errors.password = t('passwordError');
  }

  return errors;
};
