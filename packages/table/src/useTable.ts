export function useTable<T>(
  props: TableProps<T>,
  state: TableState<T>,
  ref: RefObject<HTMLElement>
): any {
  return {
    gridProps: {},
  };
}
