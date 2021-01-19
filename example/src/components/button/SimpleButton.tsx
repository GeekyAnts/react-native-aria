import React from 'react';
import { View, Text } from 'react-native';
import { useButton, AriaButton, useFocusRing } from 'react-native-aria';

export default function ({ children, onPress, ref, ...props }: any) {
  let { buttonProps } = useButton(
    {
      onPress,
      ...props,
      'aria-label': children,
      'aria-describedby': 'this is a button',
    },
    ref
  );
  return (
    <AriaButton {...buttonProps} ref={ref}>
      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 10,
          alignItems: 'center',
        }}
      >
        <Text>{children}</Text>
      </View>
    </AriaButton>
  );
}
