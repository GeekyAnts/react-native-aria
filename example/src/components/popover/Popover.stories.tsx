import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { PopoverExample } from './Popover';

const Example = () => {
  return <PopoverExample />;
};

storiesOf('Popover', module).add('Example', Example);
