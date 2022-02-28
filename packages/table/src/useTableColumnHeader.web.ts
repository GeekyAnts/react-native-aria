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

import { GridNode } from '@react-types/grid';
import { HTMLAttributes } from 'react';
// @ts-ignore
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface ColumnHeaderProps {
  /** An object representing the [column header](https://www.w3.org/TR/wai-aria-1.1/#columnheader). Contains all the relevant information that makes up the column header. */
  node: GridNode<unknown>;
  /** Whether the [column header](https://www.w3.org/TR/wai-aria-1.1/#columnheader) is contained in a virtual scroller. */
  isVirtualized?: boolean;
}

interface ColumnHeaderAria {
  /** Props for the [column header](https://www.w3.org/TR/wai-aria-1.1/#columnheader) element. */
  columnHeaderProps: HTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior and accessibility implementation for a column header in a table.
 * @param props - Props for the column header.
 * @param state - State of the table, as returned by `useTableState`.
 * @param ref - The ref attached to the column header element.
 */
//@ts-ignore
export function useTableColumnHeader<T>(
  props: ColumnHeaderProps
): ColumnHeaderAria {
  const columnHeaderProps = mapDomPropsToRN({
    role: 'row',
    ...props,
  });

  return {
    columnHeaderProps,
  };
}
