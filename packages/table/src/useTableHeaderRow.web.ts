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

import { GridRowProps } from '@react-aria/grid';
import { HTMLAttributes } from 'react';
//@ts-ignore
import { mapDomPropsToRN } from '@react-native-aria/utils';

export interface TableHeaderRowAria {
  /** Props for the grid row element. */
  rowProps: HTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior and accessibility implementation for a header row in a table.
 * @param props - Props for the row.
 * @param state - State of the table, as returned by `useTableState`.
 */
export function useTableHeaderRow<T>(
  props: GridRowProps<T>
): TableHeaderRowAria {
  let { node, isVirtualized } = props;
  let rowProps = {
    role: 'row',
  };

  if (isVirtualized) {
    rowProps['aria-rowindex'] = node.index + 1; // aria-rowindex is 1 based
  }

  return {
    rowProps: mapDomPropsToRN(rowProps),
  };
}
