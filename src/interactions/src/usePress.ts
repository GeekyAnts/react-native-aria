import React, { RefObject } from 'react';
import type {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import type { PressEvents } from '../../types';
import { mergeProps } from '@react-aria/utils';

export interface PressProps extends PressEvents {
  /** Whether the target is in a controlled press state (e.g. an overlay it triggers is open). */
  isPressed?: boolean;
  /** Whether the press events should be disabled. */
  isDisabled?: boolean;
  /** Whether the target should not receive focus on press. */
  preventFocusOnPress?: boolean;
}

export interface PressHookProps extends PressProps {
  /** A ref to the target element. */
  ref?: RefObject<TouchableOpacity>;
}

export interface PressResult {
  /** Whether the target is currently pressed. */
  isPressed: boolean;
  /** Props to spread on the target element. */
  pressProps: TouchableOpacityProps;
}

export function usePress({
  isDisabled,
  onPress,
  onPressStart,
  onPressEnd,
  onPressUp: _onPressUp, // No onPressUp on RN.
  onPressChange,
  isPressed: isPressedProp,
  ...restProps
}: PressHookProps): PressResult {
  let [isPressed, setPressed] = React.useState(false);

  let pressProps = {
    onPress: (e: GestureResponderEvent) => {
      onPress && onPress(e);
    },
    onPressIn: (e: GestureResponderEvent) => {
      onPressStart && onPressStart(e);
      setPressed(true);
      onPressChange && onPressChange(true);
    },
    onPressOut: (e: GestureResponderEvent) => {
      onPressEnd && onPressEnd(e);
      setPressed(false);
      onPressChange && onPressChange(false);
    },
    disabled: isDisabled,
  };

  pressProps = mergeProps(pressProps, restProps);

  return {
    isPressed: isPressedProp || isPressed,
    pressProps,
  };
}
