import React from 'react';
import { Item } from '@react-stately/collections';
import { Select } from './Select';
import { Text, View } from 'react-native';

const items = [
  {
    label: 'Orange',
    value: 'orange',
    variant: '#F87171',
  },
  {
    label: 'Green',
    value: 'green',
    variant: '#34D399',
  },
  {
    label: 'Blue',
    value: 'blue',
    variant: '#60A5FA',
  },

  {
    label: 'Purple',
    value: 'purple',
    variant: '#A78BFA',
  },
  {
    label: 'Pink',
    value: 'pink',
    variant: '#F472B6',
  },
];

export function SelectExample() {
  return (
    <Select label="Select color" disabledKeys={['orange']}>
      {items.map((item) => {
        return (
          <Item key={item.value} textValue={item.label}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <View
                style={{
                  backgroundColor: item.variant,
                  width: 10,
                  height: 10,
                  marginRight: 20,
                  borderRadius: 10,
                }}
              ></View>
              <Text>{item.label}</Text>
            </View>
          </Item>
        );
      })}
    </Select>
  );
}
