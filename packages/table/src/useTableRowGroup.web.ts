//@ts-ignore
import { mapDomPropsToRN } from '@react-native-aria/utils';

export function useTableRowGroup(): any {
  return {
    rowGroupProps: mapDomPropsToRN({
      role: 'rowgroup',
    }),
  };
}
