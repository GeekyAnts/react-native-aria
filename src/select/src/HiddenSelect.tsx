import React from 'react';
import { HiddenSelect as AriaHiddenSelect } from '@react-aria/select';
import { Platform } from 'react-native';

export function HiddenSelect(props: any) {
  if (Platform.OS === 'web') {
    return <AriaHiddenSelect {...props} />;
  }

  return null;
}
