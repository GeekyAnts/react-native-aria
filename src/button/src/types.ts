import type { TouchableOpacityProps } from 'react-native';
import type { PressEvents } from '../../interactions/src/usePress';

export type AriaButtonProps = TouchableOpacityProps &
  PressEvents & {
    isDisabled: boolean;
  };

export interface AriaToggleButtonProps extends AriaButtonProps {
  /** Whether the element should be selected (controlled). */
  isSelected?: boolean;
  /** Whether the element should be selected (uncontrolled). */
  defaultSelected?: boolean;
  /** Handler that is called when the element's selection state changes. */
  onChange?: (isSelected: boolean) => void;
}
