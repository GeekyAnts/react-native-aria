export * from './useTable';
export * from './useTableCell';
export * from './useTableHeaderRow';
export * from './useTableRow';
export * from './useTableColumnHeader';

// Workaround for a Parcel bug where re-exports don't work in the CommonJS output format...
// export {useGridRowGroup as useTableRowGroup} from '@react-aria/grid';
// import { GridRowGroupAria, useGridRowGroup } from '@react-aria/grid';
export function useTableRowGroup(): any {
  return {
    rowGroupProps: {},
  };
}
