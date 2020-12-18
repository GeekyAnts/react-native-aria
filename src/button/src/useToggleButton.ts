import { TouchableOpacityProps } from 'react-native';
import { AriaToggleButtonProps } from './types';
import { ButtonAria, useButton } from './useButton';
import { ToggleState } from '@react-stately/toggle';
import { chain, mergeProps } from '@react-aria/utils';
import { RefObject } from 'react';

export function useToggleButton(
  props: AriaToggleButtonProps,
  state: ToggleState,
  ref: RefObject<any>
): ButtonAria<TouchableOpacityProps> {
  const { isSelected } = state;
  const { isPressed, buttonProps } = useButton(
    {
      ...props,
      onPress: chain(state.toggle, props.onPress),
    },
    ref
  );

  return {
    isPressed,
    buttonProps: mergeProps(buttonProps, {
      'aria-pressed': isSelected,
    }),
  };
}
