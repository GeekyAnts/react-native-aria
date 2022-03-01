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

//@ts-ignore
import { mapDomPropsToRN } from '@react-native-aria/utils';
import { GridNode } from '@react-types/grid';
import { HTMLAttributes, RefObject } from 'react';
import { TableState } from '@react-stately/table';
import { useTableCell as useTableCellWeb } from '@react-aria/table';

interface TableCellProps {
  /** An object representing the table cell. Contains all the relevant information that makes up the row header. */
  node: GridNode<unknown>;
  /** Whether the cell is contained in a virtual scroller. */
  isVirtualized?: boolean;
  /**
   * Handler that is called when a user performs an action on the cell.
   * Please use onCellAction at the collection level instead.
   * @deprecated
   **/
  onAction?: () => void;
}

interface TableCellAria {
  /** Props for the table cell element. */
  gridCellProps: HTMLAttributes<HTMLElement>;
  /** Whether the cell is currently in a pressed state. */
  isPressed: boolean;
}

/**
 * Provides the behavior and accessibility implementation for a cell in a table.
 * @param props - Props for the cell.
 * @param state - State of the table, as returned by `useTableState`.
 * @param ref - The ref attached to the cell element.
 */
//@ts-ignore
export function useTableCell<T>(
  props: TableCellProps,
  state: TableState<T>,
  ref: RefObject<HTMLElement>
): TableCellAria {
  const { gridCellProps, isPressed } = useTableCellWeb(props, state, ref);

  return {
    gridCellProps: mapDomPropsToRN(gridCellProps),
    isPressed,
  };
}
