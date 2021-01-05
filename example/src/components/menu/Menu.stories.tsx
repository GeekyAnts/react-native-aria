import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { MenuButton } from './Menu';
import { Item } from '@react-stately/collections';

const MenuExample = () => {
  return (
    <MenuButton label="Actions" onAction={console.log}>
      <Item key="copy">Copy</Item>
      <Item key="cut">Cut</Item>
      <Item key="paste">Paste</Item>
    </MenuButton>
  );
};
const Example = () => {
  return <MenuExample />;
};

storiesOf('Menu', module).add('Menu', Example);
