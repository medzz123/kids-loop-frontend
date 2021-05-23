import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import AuthenticationTemplate from './AuthenticationTemplate';

export default {
  title: 'Components/AuthenticationTemplate',
  component: AuthenticationTemplate,
} as Meta;

const Template: Story = (storyArguments) => (
  <AuthenticationTemplate title="Story" {...storyArguments} />
);

export const Default = Template.bind({});
