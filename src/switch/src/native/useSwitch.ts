import type { AriaSwitchProps } from '@react-types/switch';
import type { InputHTMLAttributes, RefObject } from 'react';
import type { ToggleState } from '@react-stately/toggle';
import { useToggle } from '../../../toggle';
import type { AccessibilityProps, AccessibilityRole } from 'react-native';
import { mergeProps } from '@react-aria/utils';

export interface SwitchAria {
  /** Props for the input element. */
  inputProps: InputHTMLAttributes<HTMLInputElement> & AccessibilityProps;
}

/**
 * Provides the behavior and accessibility implementation for a switch component.
 * A switch is similar to a checkbox, but represents on/off values as opposed to selection.
 * @param props - Props for the switch.
 * @param state - State for the switch, as returned by `useToggleState`.
 * @param ref - Ref to the HTML input element.
 */
export function useSwitch(
  props: AriaSwitchProps,
  state: ToggleState,
  ref: RefObject<HTMLInputElement>
): SwitchAria {
  let { inputProps } = useToggle(props, state, ref);
  let { isSelected } = state;

  return {
    inputProps: mergeProps(inputProps, {
      accessibilityRole: 'switch' as AccessibilityRole,
      checked: isSelected,
      accessible: true,
      accessibilityState: {
        checked: isSelected,
      },
    }),
  };
}
