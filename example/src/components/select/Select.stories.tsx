import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SelectExample } from './index';

export const Example = () => {
  return <SelectExample />;
};

storiesOf('Select', module).add('example', Example);
