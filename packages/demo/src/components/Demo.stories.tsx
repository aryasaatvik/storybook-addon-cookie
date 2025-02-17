import Demo from './Demo';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Demo> = {
  title: 'web/DefaultButton',
  component: Demo,
};
export default meta;
type Story = StoryObj<typeof Demo>;

export const WithCookie: Story = {
  parameters: {
    cookie: {
      test: 'TEST!',
    },
  },
};
export const WithoutCookie: Story = {};
