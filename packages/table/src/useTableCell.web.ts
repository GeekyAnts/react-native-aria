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

import { HTMLAttributes } from 'react';
//@ts-ignore
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface TableCellAria {
  /** Props for the table cell element. */
  gridCellProps: HTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior and accessibility implementation for a cell in a table.
 * @param props - Props for the cell.
 * @param state - State of the table, as returned by `useTableState`.
 * @param ref - The ref attached to the cell element.
 */
//@ts-ignore
export function useTableCell<T>(): TableCellAria {
  const gridCellProps = mapDomPropsToRN({
    role: 'gridcell',
  });

  return {
    gridCellProps,
  };
}
