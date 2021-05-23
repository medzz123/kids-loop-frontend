import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Forgot from './Forgot';

export default {
  title: 'Pages/Forgot',
  component: Forgot,
} as Meta;

const Template: Story = (storyArguments) => <Forgot {...storyArguments} />;

export const Default = Template.bind({});
