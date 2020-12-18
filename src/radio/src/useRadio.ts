//@ts-nocheck
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import type { AriaRadioProps } from '@react-types/radio';
import { filterDOMProps, mergeProps } from '@react-aria/utils';
import type { InputHTMLAttributes, RefObject } from 'react';
import { radioGroupNames } from './utils';
import type { RadioGroupState } from '@react-stately/radio';
import { usePress } from '../../interactions/src/usePress';

interface RadioAriaProps extends AriaRadioProps {
  /**
   * Whether the Radio is required. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required).
   */
  isRequired?: boolean;
  /**
   * Whether the Radio can be interacted with but cannot have its selection state changed.
   */
  isReadOnly?: boolean;
}

interface RadioAria {
  /** Props for the input element. */
  inputProps: InputHTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior and accessibility implementation for an individual
 * radio button in a radio group.
 * @param props - Props for the radio.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 * @param ref - Ref to the HTML input element.
 */
export function useRadio(
  props: RadioAriaProps,
  state: RadioGroupState,
  ref: RefObject<HTMLElement>
): RadioAria {
  let {
    value,
    isRequired,
    isReadOnly,
    isDisabled,
    children,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
  } = props;

  let hasChildren = children != null;
  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
  if (!hasChildren && !hasAriaLabel) {
    console.warn(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  }

  let checked = state.selectedValue === value;

  let onPress = (e) => {
    // e.stopPropagation();
    state.setSelectedValue(value);
  };

  let { pressProps } = usePress({
    isDisabled,
  });

  let interactions = mergeProps(pressProps, {});
  let domProps = filterDOMProps(props, { labelable: true });
  let tabIndex =
    state.lastFocusedValue === value || state.lastFocusedValue == null ? 0 : -1;
  if (isDisabled) {
    tabIndex = undefined;
  }

  return {
    inputProps: mergeProps(domProps, {
      ...interactions,
      type: 'radio',
      name: radioGroupNames.get(state),
      tabIndex,
      disabled: isDisabled,
      readOnly: isReadOnly,
      required: isRequired,
      checked,
      value,
      onPress,

      // RN Props
      accessibilityRole: 'radio',
      accessibilityState: {
        disabled: isDisabled,
        checked,
      },
    }),
  };
}
