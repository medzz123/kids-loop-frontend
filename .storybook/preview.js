import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import Providers from './Providers';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

addDecorator(withKnobs);
addDecorator(Providers);

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

export const decorators = [
  // ... other decorators
  (Story, Context) => {
    i18n.use(initReactI18next).init({
      lng: 'en',
      fallbackLng: 'en',

      // have a common namespace used around the full app
      ns: ['translations'],
      defaultNS: 'translations',

      // debug: true,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      // TODO: load actual translations from the *.json files
      resources: { en: { translations: {} } },
    });

    return <Story />;
  },
];
