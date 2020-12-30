import React, { ReactNode } from 'react';
import { Platform, View, ViewProps } from 'react-native';
import { unstable_createElement } from 'react-native-web';

export const AriaView = React.forwardRef(function AriaView(
  { children, ...props }: ViewProps & { children: ReactNode },
  ref: any
) {
  if (Platform.OS === 'web') {
    return unstable_createElement('div', {
      ...props,
      children,
      ref,
    });
  }

  return <View {...props} ref={ref} children={children} />;
});
