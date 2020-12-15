//@ts-nocheck
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCheckbox, FocusRing } from 'react-native-aria';
import { useToggleState } from '@react-stately/toggle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Checkbox() {
  let state = useToggleState();
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(
    {
      'aria-label': 'checkbox label',
    },
    state,
    ref
  );
  console.log({ inputProps });

  return (
    <View style={styles.checkboxWrapper}>
      <View>
        <Text>Hello</Text>
      </View>
      <FocusRing focusClass="hello-world">
        <TouchableOpacity {...inputProps}>
          <MaterialCommunityIcons
            size={30}
            color={inputProps.checked ? 'green' : ''}
            name={
              inputProps.checked ? 'checkbox-marked' : 'checkbox-blank-outline'
            }
          />
        </TouchableOpacity>
      </FocusRing>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxWrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
