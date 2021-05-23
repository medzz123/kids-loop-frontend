import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Login from './Login';

export default {
  title: 'Pages/Login',
  component: Login,
} as Meta;

const Template: Story = (storyArguments) => <Login {...storyArguments} />;

export const Default = Template.bind({});
