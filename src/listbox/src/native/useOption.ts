import type { HTMLAttributes, Key, RefObject } from 'react';
import type { ListState } from '@react-stately/list';
import type { TouchableOpacityProps } from 'react-native';

interface OptionAria {
  /** Props for the option element. */
  optionProps: HTMLAttributes<HTMLElement> & TouchableOpacityProps;

  /** Props for the main text element inside the option. */
  labelProps: HTMLAttributes<HTMLElement>;

  /** Props for the description text element inside the option, if any. */
  descriptionProps: HTMLAttributes<HTMLElement>;
}

interface AriaOptionProps {
  /** Whether the option is disabled. */
  'isDisabled'?: boolean;

  /** Whether the option is selected. */
  'isSelected'?: boolean;

  /** A screen reader only label for the option. */
  'aria-label'?: string;

  /** The unique key for the option. */
  'key'?: Key;

  /** Whether selection should occur on press up instead of press down. */
  'shouldSelectOnPressUp'?: boolean;

  /** Whether the option should be focused when the user hovers over it. */
  'shouldFocusOnHover'?: boolean;

  /** Whether the option is contained in a virtual scrolling listbox. */
  'isVirtualized'?: boolean;

  /** Whether the option should use virtual focus instead of being focused directly. */
  'shouldUseVirtualFocus'?: boolean;
}

/**
 * Provides the behavior and accessibility implementation for an option in a listbox.
 * See `useListBox` for more details about listboxes.
 * @param props - Props for the option.
 * @param state - State for the listbox, as returned by `useListState`.
 */
export function useOption<T>(
  props: AriaOptionProps,
  state: ListState<T>,
  _ref: RefObject<HTMLElement>
): OptionAria {
  const onPress = () => {
    //@ts-ignore
    state.selectionManager.select(props.key);
  };
  //@ts-ignore
  let isDisabled = state.disabledKeys.has(props.key);

  return {
    optionProps: {
      onPress,
      accessibilityState: {
        selected: state.selectionManager.lastSelectedKey === props.key,
        disabled: isDisabled,
      },
      disabled: isDisabled,
    },
    labelProps: {},
    descriptionProps: {},
  };
}
