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

import type { RefObject } from 'react';
import type { MenuTriggerState } from '@react-stately/menu';
import { useId } from '@react-aria/utils';
import type { AccessibilityProps, PressableProps } from 'react-native';

interface MenuTriggerAriaProps {
  /** The type of menu that the menu trigger opens. */
  type?: 'menu' | 'listbox';
}

interface MenuTriggerAria {
  /** Props for the menu trigger element. */
  menuTriggerProps: PressableProps;

  /** Props for the menu. */
  menuProps: AccessibilityProps;
}

/**
 * Provides the behavior and accessibility implementation for a menu trigger.
 * @param props - Props for the menu trigger.
 * @param state - State for the menu trigger.
 */
export function useMenuTrigger(
  props: MenuTriggerAriaProps,
  state: MenuTriggerState,
  ref: RefObject<HTMLElement>
): MenuTriggerAria {
  let { type = 'menu' as MenuTriggerAriaProps['type'] } = props;

  let menuTriggerId = useId();

  return {
    menuTriggerProps: {
      id: menuTriggerId,
      onPress(e) {
        state.toggle();
      },
      accessibilityState: {
        expanded: state.isOpen,
      },
    },
    menuProps: {},
  };
}
