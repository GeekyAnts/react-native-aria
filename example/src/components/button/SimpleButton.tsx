import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useButton } from 'react-native-aria';
export default function ({ children, ref, ...props }: any) {
  let accessibilityProps = useButton(
    {
      ...props,
      'aria-label': children,
      'aria-describedby': 'this is a button',
    },
    ref
  );
  return (
    <TouchableOpacity {...accessibilityProps} {...props} ref={ref}>
      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 10,
          alignItems: 'center',
        }}
      >
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}
