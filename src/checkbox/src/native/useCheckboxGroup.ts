import { checkboxGroupNames } from './utils';
import type { CheckboxGroupState } from '@react-stately/checkbox';
import { filterDOMProps, mergeProps } from '@react-aria/utils';
import type { RNAriaCheckboxGroupProps, RNCheckboxGroupAria } from 'src/types';

/**
 * Provides the behavior and accessibility implementation for a checkbox group component.
 * Checkbox groups allow users to select multiple items from a list of options.
 * @param props - Props for the checkbox group.
 * @param state - State for the checkbox group, as returned by `useCheckboxGroupState`.
 */
export function useCheckboxGroup(
  props: RNAriaCheckboxGroupProps,
  state: CheckboxGroupState
): RNCheckboxGroupAria {
  let { isDisabled, name, accessibilityLabel, label } = props;

  let domProps = filterDOMProps(props, { labelable: true });

  // Pass name prop from group to all items by attaching to the state.
  checkboxGroupNames.set(state, name);

  return {
    groupProps: mergeProps(domProps, {
      accessibilityState: {
        disabled: isDisabled || undefined,
      },
      accessibilityLabel: accessibilityLabel ?? label,
    }),
    labelProps: {},
  };
}
