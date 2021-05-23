import React from 'react';

import { globalStyles, darkTheme } from '../src/theme/config';
import '../src/theme//icons.css';
import { ThemeProvider } from 'next-themes';
import { IdProvider } from '@radix-ui/react-id';

/**
 * Providers that the components uses, global decorator added to all stories.
 */
const Providers = ({ children }) => {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
     <IdProvider>{children}</IdProvider>
    </ThemeProvider>
  );
};

const providersDecorator = (storyFn) => <Providers>{storyFn()}</Providers>;

export default providersDecorator;
