import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export { default } from '@pages/Forgot';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['forgot', 'common'])),
  },
});
