import React, { ReactNode } from 'react';
import { Platform, View, ViewProps } from 'react-native';

export const AriaView = React.forwardRef(function AriaView(
  { children, ...props }: ViewProps & { children: ReactNode },
  ref: any
) {
  if (Platform.OS === 'web') {
    return (
      <View {...props}>
        {React.createElement('div', {
          ...props,
          style: { flex: 1 },
          children,
          ref,
        })}
      </View>
    );
  }

  return <View {...props} ref={ref} />;
});
