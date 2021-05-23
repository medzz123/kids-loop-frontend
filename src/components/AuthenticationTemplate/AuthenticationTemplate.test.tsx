import { render } from '@test/library';
import React from 'react';

import AuthenticationTemplate from './AuthenticationTemplate';

test('AuthenticationTemplate Test', () => {
  const { container } = render(<AuthenticationTemplate title="Sign in" />);

  expect(container).toMatchSnapshot();
});
