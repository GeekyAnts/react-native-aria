import { GridNode } from '@react-types/grid';

interface ColumnHeaderProps {
  /** An object representing the [column header](https://www.w3.org/TR/wai-aria-1.1/#columnheader). Contains all the relevant information that makes up the column header. */
  node: GridNode<unknown>;
  /** Whether the [column header](https://www.w3.org/TR/wai-aria-1.1/#columnheader) is contained in a virtual scroller. */
  isVirtualized?: boolean;
}
//@ts-ignore
export function useTableColumnHeader<T>(props: ColumnHeaderProps): any {
  return {
    columnHeaderProps: {},
  };
}
