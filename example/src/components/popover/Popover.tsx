//@ts-nocheck
import React from 'react';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useOverlayTrigger } from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';
import {
  AriaButton,
  AriaView,
  FocusScope,
  useButton,
  useOverlayPosition,
} from 'react-native-aria';
import { Svg, Path } from 'react-native-svg';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
let arrowPlacement = {
  left: 'right',
  right: 'right',
  top: 'bottom',
  bottom: 'bottom',
};

const arrowDimensions = {
  size: 10,
};

const Popover = React.forwardRef(
  (
    {
      title,
      children,
      isOpen,
      onClose,
      style,
      positionProps,
      arrowProps,
      placement,
      ...otherProps
    },
    ref
  ) => {
    const direction = arrowPlacement[placement];
    const defaultStyle = {
      top: {
        bottom: -arrowDimensions.size,
        marginLeft: -arrowDimensions.size,
      },
      bottom: {
        top: -arrowDimensions.size,
        marginLeft: -arrowDimensions.size,
        transform: [{ rotate: '180deg' }],
      },
      right: {
        left: -arrowDimensions.size,
        marginTop: -arrowDimensions.size,
        top: '50%',
        transform: [{ rotate: '180deg' }],
      },
      left: {
        right: -arrowDimensions.size,
        marginTop: -arrowDimensions.size,
        top: '50%',
      },
    };

    if (!arrowProps.style.top) {
      delete arrowProps.style.top;
    }

    if (!arrowProps.style.left) {
      delete arrowProps.style.left;
    }

    return (
      <FocusScope restoreFocus>
        <AriaView
          {...mergeProps(otherProps)}
          ref={ref}
          style={{
            backgroundColor: 'pink',
            color: 'black',
            padding: 10,
            position: 'absolute',
            ...positionProps.style,
          }}
        >
          <View>
            <Text style={{ marginTop: 0, fontWeight: 'bold', fontSize: 24 }}>
              {title}
            </Text>
          </View>
          {children}
          <View
            style={{
              position: 'absolute',
              ...defaultStyle[placement],
              ...arrowProps.style,
            }}
          >
            <Arrow props={arrowProps} direction={direction} />
          </View>
        </AriaView>
      </FocusScope>
    );
  }
);

export function PopoverExample() {
  let state = useOverlayTriggerState({});

  let triggerRef = React.useRef(null);
  let overlayRef = React.useRef(null);

  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    triggerRef
  );

  // Get popover positioning props relative to the trigger
  let {
    overlayProps: positionProps,
    arrowProps,
    placement,
  } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    isOpen: state.isOpen,
    offset: arrowDimensions.size,
    placement: 'top',
  });
  console.log({ arrowProps, placement });
  // popover closes.
  let { buttonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    triggerRef
  );

  return (
    <View style={{ alignSelf: 'center' }}>
      <AriaButton {...buttonProps} {...triggerProps} ref={triggerRef}>
        <View
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: 'pink',
          }}
        >
          <Text>Open Popover</Text>
        </View>
      </AriaButton>
      <Modal visible={state.isOpen} onRequestClose={state.close} transparent>
        <TouchableWithoutFeedback onPress={state.close}>
          <View style={StyleSheet.absoluteFill}></View>
        </TouchableWithoutFeedback>
        <Popover
          ref={overlayRef}
          title="Popover title"
          isOpen={state.isOpen}
          onClose={state.close}
          placement={placement}
          {...overlayProps}
          arrowProps={arrowProps}
          positionProps={positionProps}
        >
          <Text>This is the content of the popover. xyz abchdh</Text>
        </Popover>
      </Modal>
    </View>
  );
}

let ROOT_2 = Math.sqrt(2);

function Arrow(props) {
  let ref = React.useRef();
  let borderWidth = 1;
  let size = arrowDimensions.size;

  let landscape = props.direction === 'top' || props.direction === 'bottom';
  let mirror = props.direction === 'left' || props.direction === 'top';

  let borderDiagonal = borderWidth * ROOT_2;
  let halfBorderDiagonal = borderDiagonal / 2;

  let secondary = 2 * size + 2 * borderDiagonal;
  let primary = size + borderDiagonal;

  let primaryStart = mirror ? primary : 0;
  let primaryEnd = mirror ? halfBorderDiagonal : primary - halfBorderDiagonal;

  let secondaryStart = halfBorderDiagonal;
  let secondaryMiddle = secondary / 2;
  let secondaryEnd = secondary - halfBorderDiagonal;

  let pathData = landscape
    ? [
        'M',
        secondaryStart,
        primaryStart,
        'L',
        secondaryMiddle,
        primaryEnd,
        'L',
        secondaryEnd,
        primaryStart,
      ]
    : [
        'M',
        primaryStart,
        secondaryStart,
        'L',
        primaryEnd,
        secondaryMiddle,
        'L',
        primaryStart,
        secondaryEnd,
      ];

  /* use ceil because the svg needs to always accomodate the path inside it */
  return (
    <Svg
      fill="black"
      width={Math.ceil(landscape ? secondary : primary)}
      height={Math.ceil(landscape ? primary : secondary)}
      ref={ref}
    >
      <Path d={pathData.join(' ')} />
    </Svg>
  );
}
