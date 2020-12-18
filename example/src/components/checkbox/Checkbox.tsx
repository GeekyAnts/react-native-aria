//@ts-nocheck
import React, { useContext, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  InputWrapper,
  useCheckbox,
  useCheckboxGroupItem,
  useFocusRing,
} from 'react-native-aria';
import { useToggleState } from '@react-stately/toggle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckboxGroupContext } from './CheckboxGroup';

export function Checkbox(props: any) {
  let originalProps = props;
  let groupState = useContext(CheckboxGroupContext);
  let inputRef = useRef<HTMLInputElement>(null);
  let { isFocusVisible, focusProps } = useFocusRing();

  let { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...props,
          // Only pass isRequired and validationState to react-aria if they came from
          // the props for this individual checkbox, and not from the group via context.
          isRequired: originalProps.isRequired,
          validationState: originalProps.validationState,
        },
        groupState,
        inputRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(props, useToggleState(props), inputRef);

  // console.log({ inputProps });

  let icon = 'checkbox-blank-outline';
  if (inputProps['aria-checked'] === 'mixed') {
    icon = 'checkbox-intermediate';
  } else if (inputProps['aria-checked']) {
    icon = 'checkbox-marked';
  }

  return (
    <View style={isFocusVisible ? { borderWidth: 2 } : {}}>
      <TouchableOpacity {...inputProps} {...focusProps}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons size={30} color={'green'} name={icon} />
          {props.children}
        </View>
      </TouchableOpacity>
    </View>
  );
}
