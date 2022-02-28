export * from './useTable.web';
export * from './useTableCell.web';
export * from './useTableHeaderRow.web';
export * from './useTableRow.web';
export * from './useTableColumnHeader.web';

// Workaround for a Parcel bug where re-exports don't work in the CommonJS output format...
// export {useGridRowGroup as useTableRowGroup} from '@react-aria/grid';
import { mapDomPropsToRN } from '@react-native-aria/utils';

export function useTableRowGroup(): any {
  return {
    rowGroupProps: mapDomPropsToRN({
      role: 'rowgroup',
    }),
  };
}
