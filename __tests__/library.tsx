import { IdProvider } from '@radix-ui/react-id';
import { render, RenderOptions } from '@testing-library/react';
import React, { FC, Fragment, ReactElement } from 'react';

const AllTheProviders: FC = ({ children }) => {
  return (
    <Fragment>
      <IdProvider>{children}</IdProvider>
    </Fragment>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
