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
import { useTableRow as useTableRowWeb } from '@react-aria/table';

/**
 * Provides the behavior and accessibility implementation for a row in a table.
 * @param props - Props for the row.
 * @param state - State of the table, as returned by `useTableState`.
 */
//@ts-ignore
export function useTableRow<T>(props: any, state: any, ref: any): any {
  const { rowProps } = useTableRowWeb(props, state, ref);

  return {
    rowProps: mapDomPropsToRN(rowProps),
  };
}
