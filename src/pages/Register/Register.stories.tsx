import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Register from './Register';

export default {
  title: 'Pages/Register',
  component: Register,
} as Meta;

const Template: Story = (storyArguments) => <Register {...storyArguments} />;

export const Default = Template.bind({});
