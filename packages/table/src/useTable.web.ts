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

import { GridAria } from '@react-aria/grid';
//@ts-ignore
import { mapDomPropsToRN } from '@react-native-aria/utils';
import { useTable as useTableWeb } from '@react-aria/table';
// import { TreeState } from '@react-stately/tree';
import { TableState, useTableState } from '@react-stately/table';
import { RefObject } from 'react';

/**
 * Provides the behavior and accessibility implementation for a table component.
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys,
 * and optionally supports row selection and sorting.
 * @param props - Props for the table.
 */
//@ts-ignore
export function useTable<T>(
  props: any,
  state: TableState<any>,
  ref: RefObject<HTMLElement>
): GridAria {
  console.log('Hello world');
  // let gridProps = { role: 'grid' };

  // gridProps['aria-label'] = props['aria-label'] ?? props?.accessibilityLabel;

  // return {
  //   gridProps: mapDomPropsToRN(gridProps),
  // };
  let { selectionMode, selectionBehavior } = props;
  let tableState = useTableState({
    ...props,
    // showSelectionCheckboxes:
    // selectionMode === 'multiple' && selectionBehavior !== 'replace',
  });

  // let { collection } = state;
  // let { gridProps } = useTable(props, state, ref);
  let newProps = { ...props, 'aria-label': props.accessibilityLabel };
  let params = useTableWeb(newProps, tableState, ref);
  // // params.menuProps = mapDomPropsToRN(params.menuProps);
  // console.log(params, 'Params');

  return {};
}
