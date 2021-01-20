import type { ReactNode, RefObject } from 'react';
import { PressEvents, usePress } from '../../../interactions/index';
import type { AccessibilityProps, TouchableOpacityProps } from 'react-native';
import { mergeProps } from '@react-aria/utils';
import type { AriaLabelingProps } from '@react-types/shared';

export interface RNAriaButtonProps extends PressEvents, AccessibilityProps {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The content to display in the button. */
  children?: ReactNode;
}

export interface ButtonAria {
  /** Props for the button element. */
  buttonProps: TouchableOpacityProps;
  /** Whether the button is currently pressed. */
  isPressed: boolean;
}

export function useButton(
  props: RNAriaButtonProps & AriaLabelingProps,
  ref: RefObject<any>
): ButtonAria {
  let { isDisabled, onPress, ...rest } = props;

  let { pressProps } = usePress({
    onPress,
    isDisabled,
    ref,
  });

  const mergedProps = mergeProps(pressProps, rest, {
    accessibilityState: {
      ...rest.accessibilityState,
      disabled: isDisabled,
    },
    accessible: props.accessible ?? true,
    accessibilityRole: props.accessibilityRole ?? 'button',
    accessibilityValue:
      props['aria-label'] ?? typeof props.children === 'string'
        ? props.children
        : undefined,
    accessibilityHint: props['aria-describedby'],
  });

  return {
    isPressed: false,
    buttonProps: mergedProps,
  };
}
