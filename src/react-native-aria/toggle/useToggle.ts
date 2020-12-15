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

import type { AriaToggleProps } from '@react-types/checkbox';
import { filterDOMProps, mergeProps } from '@react-aria/utils';
import type { InputHTMLAttributes, RefObject } from 'react';
import type { ToggleState } from '@react-stately/toggle';
import { useFocusable } from '@react-aria/focus';
import { usePress } from '../interactions/src/usePress';

export interface ToggleAria {
  /**
   * Props to be spread on the input element.
   */
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Handles interactions for toggle elements, e.g. Checkboxes and Switches.
 */
export function useToggle(
  props: AriaToggleProps,
  state: ToggleState,
  ref: RefObject<HTMLElement>
): ToggleAria {
  let {
    isDisabled = false,
    isRequired,
    isReadOnly,
    value,
    name,
    children,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    validationState = 'valid',
  } = props;

  let onPress = () => {
    state.setSelected(!state.isSelected);
  };

  let hasChildren = children != null;
  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
  if (!hasChildren && !hasAriaLabel) {
    console.warn(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  }

  // This handles focusing the input on pointer down, which Safari does not do by default.
  let { pressProps } = usePress({
    isDisabled,
    onPress,
  });

  let { focusableProps } = useFocusable(props, ref);
  let interactions = mergeProps(pressProps, focusableProps);
  let domProps = filterDOMProps(props, { labelable: true });

  return {
    inputProps: mergeProps(domProps, {
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-controls': props['aria-controls'],
      // onChange,
      'disabled': isDisabled,
      'required': isRequired,
      'readOnly': isReadOnly,
      value,
      name,
      'type': 'checkbox',
      ...interactions,
    }),
  };
}
