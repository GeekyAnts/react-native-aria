//@ts-nocheck
import React from 'react';
import {
  CheckboxGroupState,
  useCheckboxGroupState,
} from '@react-stately/checkbox';
import { useCheckboxGroup, useCheckboxGroupItem } from 'react-native-aria';
import { Text, View } from 'react-native';

export let CheckboxGroupContext = React.createContext<CheckboxGroupState>({
  isDisabled: false,
  isReadOnly: false,
  isSelected: false,
});

export function CheckboxGroup(props) {
  let { children, label } = props;
  let state = useCheckboxGroupState(props);
  let { groupProps, labelProps } = useCheckboxGroup(props, state);

  return (
    <View {...groupProps} nativeID={groupProps.id}>
      {label && (
        <Text {...labelProps} nativeID={labelProps.id}>
          {label}
        </Text>
      )}
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
    </View>
  );
}
