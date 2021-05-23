import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export { default } from '@pages/Register';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['register', 'common'])),
  },
});
