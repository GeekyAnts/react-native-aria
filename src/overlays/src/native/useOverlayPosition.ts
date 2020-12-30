import type { PlacementAxis } from '@react-types/overlays';
import React, { RefObject } from 'react';
import {
  I18nManager,
  //@ts-ignore
  Dimensions,
  View,
} from 'react-native';
import type { Placement, PositionProps } from '@react-types/overlays';
import { APPROX_STATUSBAR_HEIGHT } from '../../../utils';

interface AriaPositionProps extends PositionProps {
  /**
   * Element that that serves as the positioning boundary.
   * @default document.body
   */
  boundaryElement?: View;
  /**
   * The ref for the element which the overlay positions itself with respect to.
   */
  targetRef: RefObject<View>;
  /**
   * The ref for the overlay element.
   */
  overlayRef: RefObject<View>;
  /**
   * A ref for the scrollable region within the overlay.
   * @default overlayRef
   */
  scrollRef?: RefObject<View>;
  /**
   * Whether the overlay should update its position automatically.
   * @default true
   */
  shouldUpdatePosition?: boolean;
  /** Handler that is called when the overlay should close. */
  onClose?: () => void;
}

const INDENTS = {
  top: APPROX_STATUSBAR_HEIGHT ?? 0,
  default: 8,
};

export function useOverlayPosition(props: AriaPositionProps) {
  const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

  let {
    targetRef,
    overlayRef,
    placement = 'bottom' as Placement,
    offset = 0,
  } = props;

  const [elementStyles, setElementStyle] = React.useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,

    // Keep opacity 0 to prevent initial rendering
    opacity: 0,
  });

  const [triggerElementOffset, settriggerElementOffset] = React.useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    function setInitialOffsets() {
      if (targetRef && targetRef.current) {
        targetRef.current.measureInWindow(
          (left: number, top: number, width: number, height: number) => {
            settriggerElementOffset({ left, top, width, height });
          }
        );
      }
      if (overlayRef && overlayRef.current) {
        overlayRef.current.measureInWindow(
          (left: number, top: number, width: number, height: number) => {
            setElementStyle({ left, top, width, height, opacity: 1 });
          }
        );
      }
    }

    // Sometimes returned values are 0, 0 so calling it here instead of using setTimeout
    requestAnimationFrame(setInitialOffsets);
  }, [targetRef, overlayRef, props.isOpen]);

  let overlayPosition = React.useMemo(
    () =>
      getPositions({
        placementInfo: translateRTL(placement),
        mainAxisOffset: offset,
        elementOffset: elementStyles,
        triggerElementOffset,
      }),
    [triggerElementOffset, elementStyles, placement, offset]
  );

  // If popover colliding with bottom of window
  if (overlayPosition.top + elementStyles.height > windowHeight) {
    overlayPosition.top = windowHeight - elementStyles.height - INDENTS.default;
  }

  // If popover colliding with top of window
  if (overlayPosition.top < 0) {
    overlayPosition.top = INDENTS.top;
  }

  // If popover colliding with right side of window
  if (overlayPosition.left + elementStyles.width > windowWidth) {
    overlayPosition.left = windowWidth - elementStyles.width - INDENTS.default;
  }

  // If popover colliding with left side of window
  if (overlayPosition.left < 0) {
    overlayPosition.left = INDENTS.default;
  }

  return {
    overlayProps: {
      style: {
        ...overlayPosition,
        opacity: elementStyles.opacity,
      },
    },
    placement: placement,
    arrowProps: {
      style: {},
    },
    updatePosition: () => {},
  };
}

function translateRTL(position: any) {
  if (I18nManager.isRTL) {
    return position.replace('start', 'right').replace('end', 'left');
  }
  return position.replace('start', 'left').replace('end', 'right');
}
interface Position {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface Dimensions {
  width: number;
  height: number;
  top: number;
  left: number;
  scroll: Position;
}

interface Offset {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface PositionResult {
  position?: Position;
  arrowOffsetLeft?: number;
  arrowOffsetTop?: number;
  maxHeight?: number;
  placement: PlacementAxis;
}

export interface PositionResult {
  position?: Position;
  arrowOffsetLeft?: number;
  arrowOffsetTop?: number;
  maxHeight?: number;
  placement: PlacementAxis;
}

const getPositions = ({
  placementInfo,
  triggerElementOffset,
  elementOffset,
  mainAxisOffset,
}: {
  placementInfo: Placement;
  triggerElementOffset: Offset;
  elementOffset: Offset;
  mainAxisOffset: number;
}): { top: number; left: number } => {
  let [placement, crossPlacement] = placementInfo.split(' ');
  let top = 0;
  let left = 0;

  if (placement === 'bottom') {
    top =
      triggerElementOffset.top + triggerElementOffset.height + mainAxisOffset;
    let triggerCenter =
      triggerElementOffset.left + triggerElementOffset.width / 2;
    left = triggerCenter - elementOffset.width / 2;

    if (crossPlacement === 'left') {
      left = triggerElementOffset.left;
    } else if (crossPlacement === 'right') {
      left =
        triggerElementOffset.left -
        (elementOffset.width - triggerElementOffset.width);
    }
  } else if (placement === 'top') {
    top = triggerElementOffset.top - elementOffset.height - mainAxisOffset;
    let triggerCenter =
      triggerElementOffset.left + triggerElementOffset.width / 2;
    left = triggerCenter - elementOffset.width / 2;

    if (crossPlacement === 'left') {
      left = triggerElementOffset.left;
    } else if (crossPlacement === 'right') {
      left =
        triggerElementOffset.left -
        (elementOffset.width - triggerElementOffset.width);
    }
  } else if (placement === 'left') {
    left = triggerElementOffset.left - elementOffset.width - mainAxisOffset;
    let triggerCenter =
      triggerElementOffset.top + triggerElementOffset.height / 2;
    top = triggerCenter - elementOffset.height / 2;

    if (crossPlacement === 'top') {
      top = triggerElementOffset.top;
    } else if (crossPlacement === 'bottom') {
      top =
        triggerElementOffset.top -
        (elementOffset.height - triggerElementOffset.height);
    }
  } else if (placement === 'right') {
    left =
      triggerElementOffset.left + triggerElementOffset.width + mainAxisOffset;
    let triggerCenter =
      triggerElementOffset.top + triggerElementOffset.height / 2;
    top = triggerCenter - elementOffset.height / 2;

    if (crossPlacement === 'top') {
      top = triggerElementOffset.top;
    } else if (crossPlacement === 'bottom') {
      top =
        triggerElementOffset.top -
        (elementOffset.height - triggerElementOffset.height);
    }
  }

  let positions = { top, left };

  return positions;
};
