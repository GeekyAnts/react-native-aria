import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ListBoxExample } from './Listbox';

const Example = () => {
  return <ListBoxExample />;
};

storiesOf('Listbox', module).add('Example', Example);
