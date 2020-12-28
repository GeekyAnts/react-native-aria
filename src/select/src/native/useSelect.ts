import type { AriaButtonProps } from '@react-types/button';
import type { AriaSelectProps } from '@react-types/select';
import { HTMLAttributes, RefObject, useEffect, useRef } from 'react';
import type { KeyboardDelegate } from '@react-types/shared';
import type { SelectState } from '@react-stately/select';
import {
  AccessibilityInfo,
  findNodeHandle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface AriaSelectOptions<T> extends AriaSelectProps<T> {
  /**
   * An optional keyboard delegate implementation for type to select,
   * to override the default.
   */
  keyboardDelegate?: KeyboardDelegate;
}

interface SelectAria {
  /** Props for the label element. */
  labelProps: HTMLAttributes<HTMLElement>;

  /** Props for the popup trigger element. */
  triggerProps: AriaButtonProps & TouchableOpacityProps;

  /** Props for the element representing the selected value. */
  valueProps: HTMLAttributes<HTMLElement>;

  /** Props for the popup. */
  menuProps: HTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior and accessibility implementation for a select component.
 * A select displays a collapsible list of options and allows a user to select one of them.
 * @param props - Props for the select.
 * @param state - State for the select, as returned by `useListState`.
 */
export function useSelect<T>(
  _props: AriaSelectOptions<T>,
  state: SelectState<T>,
  ref: RefObject<TouchableOpacity>
): SelectAria {
  const prev = useRef(state.isOpen);

  // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
  // When virtualized, the layout object will be passed in as a prop and override this.

  useEffect(() => {
    if (ref.current && !state.isOpen && prev.current !== state.isOpen) {
      const node = findNodeHandle(ref.current);
      node && AccessibilityInfo.setAccessibilityFocus(node);
    }

    prev.current = state.isOpen;
  }, [state.isOpen]);

  return {
    labelProps: {},
    triggerProps: {
      onPress: () => {
        state.toggle();
      },
      accessibilityRole: 'combobox',
      accessibilityState: {
        expanded: state.isOpen,
      },
      accessibilityValue: {
        text: state.selectedItem?.textValue,
      },
    },
    valueProps: {},
    menuProps: {},
  };
}
