import React from 'react';
import { Pressable } from 'react-native';

// TODO: Accept elementType prop (Pressable, Pressable, etc)
export const AriaButton = React.forwardRef(function AriaButton(
  props: any,
  ref
) {
  return <Pressable {...props} ref={ref} />;
});
