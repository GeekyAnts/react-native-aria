import React from 'react';
import { StyleSheet } from 'react-native';
//@ts-ignore
import { unstable_createElement } from 'react-native-web';

const ovverrideStyles = {
  alignItems: 'stretch',
  border: '0 solid black',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  margin: 0,
  minHeight: 0,
  minWidth: 0,
  padding: 0,
  position: 'relative',
  zIndex: 0,
};

// TODO: Accept elementTyp prop (div, span, etc)
export const AriaButton = React.forwardRef(function AriaButton(
  props: any,
  ref
) {
  return unstable_createElement('button', {
    ...props,
    ref,
    style: StyleSheet.flatten([ovverrideStyles, props.style]),
  });
});
