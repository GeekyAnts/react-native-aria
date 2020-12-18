import React, { RefObject } from 'react';
import type {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { mergeProps } from '@react-aria/utils';

export interface PressProps {
  onPress?: any;
  /** Whether the target is in a controlled press state (e.g. an overlay it triggers is open). */
  isPressed?: boolean;
  /** Whether the press events should be disabled. */
  isDisabled?: boolean;
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
  isPressed: isPressedProp,
  ...restProps
}: PressHookProps): PressResult {
  let [isPressed, setPressed] = React.useState(false);

  let pressProps = {
    onPress: (e: GestureResponderEvent) => {
      restProps.onPress && restProps.onPress(e);
    },
    onPressIn: () => {
      setPressed(true);
    },
    onPressOut: () => {
      setPressed(false);
    },
    disabled: isDisabled,
  };

  pressProps = mergeProps(pressProps, restProps);

  return {
    isPressed,
    pressProps,
  };
}
