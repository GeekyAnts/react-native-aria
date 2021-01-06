import React, { HTMLAttributes } from 'react';
import type { AccessibilityProps, ViewStyle } from 'react-native';
//@ts-ignore
import { unstable_createElement } from 'react-native-web';

type IAriaButtonProps = HTMLAttributes<HTMLButtonElement> &
  AccessibilityProps & {
    style: ViewStyle;
    children?: React.ReactNode;
  };

// RN Pressable for web does not fully support tabIndex, onKeyDown which is needed by react-aria for keyboard navigation
// TODO: Accept elementTyp prop (div, span, etc)
export const AriaButton = React.forwardRef(function AriaButton(
  props: IAriaButtonProps,
  ref
) {
  let newProps = { ...props };
  if (newProps.tabIndex === undefined) {
    newProps.tabIndex = 0;
  }

  return unstable_createElement('div', {
    role: 'button',
    ...newProps,
    style: {
      cursor: 'pointer',
      ...newProps.style,
    },
    ref,
  });
});
