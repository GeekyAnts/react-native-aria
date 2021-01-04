import React from 'react';
import { useListState } from '@react-stately/list';
import { Item } from '@react-stately/collections';
import { mergeProps } from '@react-aria/utils';
import {
  Li,
  Ul,
  AriaView,
  useListBox,
  useOption,
  useFocusRing,
  AriaButton,
} from 'react-native-aria';
import { Text, View } from 'react-native';

function ListBox(props) {
  // Create state based on the incoming props
  let state = useListState(props);

  // Get props for the listbox element
  let ref = React.useRef();
  let { listBoxProps, labelProps } = useListBox(props, state, ref);

  console.log('hey man ', listBoxProps);

  return (
    <>
      <AriaView {...labelProps}>
        <Text>{props.label}</Text>
      </AriaView>
      <AriaView {...listBoxProps} ref={ref}>
        <View
          style={{
            padding: 0,
            marginVertical: 5,
            borderWidth: 1,
            borderColor: '#000',
            maxWidth: 250,
          }}
        >
          {[...state.collection].map((item) => (
            <Option key={item.key} item={item} state={state} />
          ))}
        </View>
      </AriaView>
    </>
  );
}

function Option({ item, state }) {
  // Get props for the option element
  let ref = React.useRef();
  let isDisabled = state.disabledKeys.has(item.key);
  let isSelected = state.selectionManager.isSelected(item.key);
  let { optionProps } = useOption(
    {
      key: item.key,
      isDisabled,
      isSelected,
    },
    state,
    ref
  );

  console.log('hey man ', optionProps);

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  let { isFocusVisible, focusProps } = useFocusRing();
  console.log('hahaha  ', isSelected);
  return (
    <AriaButton {...mergeProps(optionProps, focusProps)} ref={ref}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'transparent',
          paddingVertical: 2,
          paddingHorizontal: 5,
          // outline: isFocusVisible ? '2px solid orange' : 'none',
        }}
      >
        <Text
          style={{
            color: isSelected ? 'white' : isDisabled ? 'grey' : null,
          }}
        >
          {item.rendered}
        </Text>
      </View>
    </AriaButton>
  );
}

export function ListBoxExample() {
  return (
    <ListBox
      label="Choose an option"
      selectionMode="multiple"
      disabledKeys={['one']}
    >
      <Item key="one">One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </ListBox>
  );
}
