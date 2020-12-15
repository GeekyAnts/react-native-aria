import { RefObject, useState } from 'react';
import type {
  GestureResponderEvent,
  AccessibilityRole,
  AccessibilityState,
} from 'react-native';

export type IButtonAccessibilityProps = {
  accessible?: boolean;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

type IUseButtonProps = {
  isDisabled: boolean;
  onPress: any;
} & IButtonAccessibilityProps;

export interface ButtonAria {
  buttonProps: {
    onPress: any;
    onPressIn: any;
    onPressOut: any;
    disabled: boolean;
  } & IButtonAccessibilityProps;
  isPressed: boolean;
}

export function useButton(
  props: Partial<IUseButtonProps>,
  _ref?: RefObject<any>
): ButtonAria {
  const [isPressed, setIsPressed] = useState(false);
  const disabled = !!props.isDisabled;

  const buttonProps = {
    accessible: props.accessible ?? true,
    accessibilityRole: props.accessibilityRole ?? 'button',
    accessibilityState: props.accessibilityState ?? {
      disabled,
    },
    disabled,
    ...props,
    onPress: (e: GestureResponderEvent) => {
      props.onPress && props.onPress(e);
    },
    onPressIn: () => {
      setIsPressed(true);
    },
    onPressOut: () => {
      setIsPressed(false);
    },
  };

  const newProps = {
    isPressed,
    buttonProps,
  };

  return newProps;
}
