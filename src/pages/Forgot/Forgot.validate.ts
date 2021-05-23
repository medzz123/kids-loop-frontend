import { FormikErrors } from 'formik';
import { TFunction } from 'next-i18next';

import { ForgotValues } from './Forgot.models';

export const validateForgotPassword = (values: ForgotValues, t: TFunction) => {
  const errors: FormikErrors<ForgotValues> = {};
  if (!values.email) {
    errors.email = t('emailError');
  }

  return errors;
};
