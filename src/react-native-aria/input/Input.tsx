import { VisuallyHidden } from '@react-aria/visually-hidden';
import React from 'react';
import { Platform, TouchableWithoutFeedback } from 'react-native';

export function InputWrapper({ children, ...props }: any) {
  if (Platform.OS === 'web') {
    return (
      <label>
        <VisuallyHidden>
          <input {...props} />
        </VisuallyHidden>
        {children}
      </label>
    );
  }

  return (
    <TouchableWithoutFeedback {...props}>{children}</TouchableWithoutFeedback>
  );
}
