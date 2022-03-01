import { RefObject } from 'react';
import { TableState } from '@react-stately/table';

export function useTable<T>(
  _props: any,
  _state: TableState<T>,
  _ref: RefObject<HTMLElement>
): any {
  return {
    gridProps: {},
  };
}
