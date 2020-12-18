import type { RefObject } from 'react';
import { usePress } from '../../interactions/src/usePress';
import { mergeProps } from '@react-aria/utils';
import type { AriaButtonProps } from './types';
import type { TouchableOpacityProps } from 'react-native';

export interface ButtonAria<T> {
  /** Props for the button element. */
  buttonProps: T;
  /** Whether the button is currently pressed. */
  isPressed: boolean;
}

export function useButton(
  props: AriaButtonProps,
  ref: RefObject<any>
): ButtonAria<TouchableOpacityProps> {
  let { isDisabled, onPress, onPressStart, onPressEnd, onPressChange } = props;

  let { pressProps, isPressed } = usePress({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
    ref,
  });

  let buttonProps = mergeProps(props, pressProps);

  return {
    isPressed,
    buttonProps: {
      ...buttonProps,
      accessibilityState: {
        disabled: isDisabled,
      },
    },
  };
}
