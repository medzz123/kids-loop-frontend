import { FormikErrors } from 'formik';
import { TFunction } from 'next-i18next';

import { RegisterValues } from './Register.models';

export const validateRegister = (values: RegisterValues, t: TFunction) => {
  const errors: FormikErrors<RegisterValues> = {};

  if (!values.email) {
    errors.email = t('emailError');
  }

  if (!values.name) {
    errors.name = t('nameError');
  }

  if (!values.name) {
    errors.password = t('passwordError');
  }

  return errors;
};
