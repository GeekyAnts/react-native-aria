import { GridNode } from '@react-types/grid';
import { RefObject } from 'react';
import { TableState } from '@react-stately/table';

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
//@ts-ignore
export function useTableCell<T>(
  _props: TableCellProps,
  _state: TableState<T>,
  _ref: RefObject<HTMLElement>
): any {
  return {
    gridCellProps: {},
  };
}
