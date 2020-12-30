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
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Popover = React.forwardRef(
  (
    { title, children, isOpen, onClose, style, positionProps, ...otherProps },
    ref
  ) => {
    console.log({ positionProps });

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
  let { overlayProps: positionProps, arrowProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    isOpen: state.isOpen,
    offset: 10,
    crossOffset: 10,
    placement: 'top left',
  });
  console.log({ arrowProps });
  // popover closes.
  let { buttonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    triggerRef
  );

  return (
    <>
      <AriaButton
        {...buttonProps}
        {...triggerProps}
        ref={triggerRef}
        style={{ backgroundColor: 'pink' }}
      >
        <Text>Open Popover</Text>
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
          {...overlayProps}
          positionProps={positionProps}
        >
          <Text>This is the content of the popover. xyz abchdh</Text>
        </Popover>
      </Modal>
    </>
  );
}
