import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ControlledSwitch } from './index';

const SwitchExample = () => {
  return <ControlledSwitch />;
};

export const Example = () => {
  return <SwitchExample />;
};

storiesOf('Switch', module).add('Switch', Example);
