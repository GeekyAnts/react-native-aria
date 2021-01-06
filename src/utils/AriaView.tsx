import React, { HTMLAttributes } from 'react';
import { AccessibilityProps, Platform, View, ViewStyle } from 'react-native';
//@ts-ignore
import { unstable_createElement } from 'react-native-web';

type IAriaViewProps = HTMLAttributes<HTMLElement> &
  AccessibilityProps & {
    style: ViewStyle;
    children?: React.ReactNode;
  };

// RN View for web does not fully support tabIndex, onKeyDownCapture which is needed by react-aria.
export const AriaView = React.forwardRef(function AriaView(
  { children, ...props }: IAriaViewProps,
  ref: any
) {
  if (Platform.OS === 'web') {
    return unstable_createElement('div', {
      ...props,
      children,
      ref,
    });
  }
  //@ts-ignore
  return <View {...props} ref={ref} children={children} />;
});
