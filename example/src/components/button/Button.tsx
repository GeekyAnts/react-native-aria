//@ts-nocheck
import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useButton } from 'react-native-aria';

export function Button() {
  const ref = React.useRef(null);

  const button = useButton({
    isDisabled: false,
    accessibilityLabel: 'test button',
    onPress: () => {
      alert('hello world');
    },
  });

  React.useEffect(() => {
    console.log(ref);
  }, []);

  console.log({ button });

  return (
    <TouchableOpacity {...button.buttonProps} aria-has-popup="true">
      <Text>Button</Text>
    </TouchableOpacity>
  );
}
