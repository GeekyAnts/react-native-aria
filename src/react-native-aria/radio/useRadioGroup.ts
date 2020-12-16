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

import type { AriaRadioGroupProps } from '@react-types/radio';
import { filterDOMProps, mergeProps, useId } from '@react-aria/utils';
import type { HTMLAttributes } from 'react';
import { radioGroupNames } from './utils';
import type { RadioGroupState } from '@react-stately/radio';
import { useLabel } from '@react-aria/label';

interface RadioGroupAria {
  /** Props for the radio group wrapper element. */
  radioGroupProps: HTMLAttributes<HTMLElement>;
  /** Props for the radio group's visible label (if any). */
  labelProps: HTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior and accessibility implementation for a radio group component.
 * Radio groups allow users to select a single item from a list of mutually exclusive options.
 * @param props - Props for the radio group.
 * @param state - State for the radio group, as returned by `useRadioGroupState`.
 */
export function useRadioGroup(
  props: AriaRadioGroupProps,
  state: RadioGroupState
): RadioGroupAria {
  let {
    name,
    validationState,
    isReadOnly,
    isRequired,
    isDisabled,
    orientation = 'vertical',
  } = props;

  let { labelProps, fieldProps } = useLabel({
    ...props,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: 'span',
  });

  let domProps = filterDOMProps(props, { labelable: true });
  // When the radio group loses focus, reset the focusable radio to null if
  // there is no selection. This allows tabbing into the group from either
  // direction to go to the first or last radio.

  let groupName = useId(name);
  radioGroupNames.set(state, groupName);

  return {
    radioGroupProps: mergeProps(domProps, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      'role': 'radiogroup',
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-readonly': isReadOnly || undefined,
      'aria-required': isRequired || undefined,
      'aria-disabled': isDisabled || undefined,
      'aria-orientation': orientation,
      ...fieldProps,

      // RN Props
      'accessibilityRole': 'radiogroup',
      'accessible': true,
      'accessibilityState': {
        disabled: isDisabled,
      },
    }),
    labelProps,
  };
}
