import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export { default } from '@pages/Login';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login', 'common'])),
  },
});
