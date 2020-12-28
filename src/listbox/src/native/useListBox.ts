import type { AriaListBoxProps } from '@react-types/listbox';
import type { HTMLAttributes, ReactNode, RefObject } from 'react';
import type { KeyboardDelegate } from '@react-types/shared';
import type { ListState } from '@react-stately/list';

interface ListBoxAria {
  /** Props for the listbox element. */
  listBoxProps: HTMLAttributes<HTMLElement>;
  /** Props for the listbox's visual label element (if any). */
  labelProps: HTMLAttributes<HTMLElement>;
}

interface AriaListBoxOptions<T> extends Omit<AriaListBoxProps<T>, 'children'> {
  /** Whether the listbox uses virtual scrolling. */
  isVirtualized?: boolean;

  /**
   * An optional keyboard delegate implementation for type to select,
   * to override the default.
   */
  keyboardDelegate?: KeyboardDelegate;

  /**
   * An optional visual label for the listbox.
   */
  label?: ReactNode;
}

/**
 * Provides the behavior and accessibility implementation for a listbox component.
 * A listbox displays a list of options and allows a user to select one or more of them.
 * @param props - Props for the listbox.
 * @param state - State for the listbox, as returned by `useListState`.
 */
export function useListBox<T>(
  _props: AriaListBoxOptions<T>,
  _state: ListState<T>,
  _ref: RefObject<HTMLElement>
): ListBoxAria {
  return {
    labelProps: {},
    listBoxProps: {},
  };
}
