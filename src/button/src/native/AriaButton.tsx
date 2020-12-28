import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

// TODO: Accept elementType prop (Pressable, TouchableOpacity, etc)
export const AriaButton = React.forwardRef(function AriaButton(
  props: any,
  ref
) {
  return <TouchableNativeFeedback {...props} ref={ref} />;
});
