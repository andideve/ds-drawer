import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Drawer from '../drawer';
import defaults from '../drawer.defaults';

export default {
  title: 'Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  isOpen: false,
  position: defaults.position,
  inset: defaults.inset,
  zIndex: defaults.zIndex,
  placement: defaults.placement,
  duration: defaults.duration,
  unmountOnCollapse: defaults.unmountOnCollapse,
  children: (
    <div style={{ backgroundColor: 'var(--ds-colors-background-secondary)' }}>Drawer content</div>
  ),
};
