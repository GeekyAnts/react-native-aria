import React, { Children } from 'react';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadio, useRadioGroup } from 'react-native-aria';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Input, InputWrapper, useFocusRing } from 'react-native-aria';
import { VisuallyHidden } from '@react-aria/visually-hidden';

// RadioGroup is the same as in the previous example
let RadioContext = React.createContext();

export function RadioGroup(props) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <View {...radioGroupProps}>
      <Text {...labelProps} nativeID={labelProps.id}>
        {label}
      </Text>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </View>
  );
}

export function Radio(props) {
  let state = React.useContext(RadioContext);
  let { inputProps } = useRadio(props, state);
  let { isFocusVisible, focusProps } = useFocusRing();
  // let isFocusVisible = false;
  // let focusProps = {};

  let isSelected = state.selectedValue === props.value;
  console.log({ inputProps });
  const icon = isSelected ? 'radiobox-marked' : 'radiobox-blank';
  console.log(inputProps.tabIndex, inputProps.value);

  return (
    <InputWrapper {...inputProps} {...focusProps}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={isFocusVisible ? { borderWidth: 1 } : {}}>
          <MaterialCommunityIcons size={30} color={'green'} name={icon} />
        </View>
        <Text>{props.children}</Text>
      </View>
    </InputWrapper>
  );
}

{
  /* <TouchableOpacity {...inputProps}>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <MaterialCommunityIcons size={30} color={'green'} name={icon} />
  <Text>{props.children}</Text>
</View>
</TouchableOpacity> */
}
