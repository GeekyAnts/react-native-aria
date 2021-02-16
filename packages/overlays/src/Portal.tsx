import React, { useEffect } from 'react';
import { ModalProvider, useModalProvider } from '@react-aria/overlays';
import type { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type OverlayItem = {
  id: number;
  node: ReactNode;
};

interface PortalContext {
  items: Array<OverlayItem>;
  setOverlayItem: (node: ReactNode) => number;
  removeOverlayItem: (id: number) => void;
  updateOverlayItem: (id: number, node: ReactNode) => void;
}

interface ModalProviderProps extends ViewProps {
  children: ReactNode;
}

const PortalContext = React.createContext<PortalContext | null>(null);

let globalOverlayCounter = 0;

function PortalProvider(props: { children: ReactNode }) {
  const [items, setItems] = React.useState<Array<OverlayItem>>([]);

  const setOverlayItem = (item: ReactNode) => {
    const overlayId = ++globalOverlayCounter;
    setItems((prev) => prev.concat([{ id: overlayId, node: item }]));
    return overlayId;
  };

  const updateOverlayItem = (id: number, node: ReactNode) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { id, node };
        }
        return item;
      })
    );
  };

  const removeOverlayItem = (id: number) => {
    setItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      return newItems;
    });
  };

  return (
    <PortalContext.Provider
      value={{ items, setOverlayItem, removeOverlayItem, updateOverlayItem }}
    >
      {props.children}
      {items.map((item) => {
        return <React.Fragment key={item.id}>{item.node}</React.Fragment>;
      })}
    </PortalContext.Provider>
  );
}

function usePortalProvider() {
  const context = React.useContext(PortalContext);
  return context;
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */
function OverlayContainerTop(props: ModalProviderProps) {
  let { modalProviderProps } = useModalProvider();
  return (
    <View
      pointerEvents="box-none"
      style={StyleSheet.absoluteFill}
      collapsable={false}
      {...props}
      {...modalProviderProps}
    />
  );
}

/**
 * An OverlayProvider acts as a container for the top-level application.
 * Any application that uses modal dialogs or other overlays should
 * be wrapped in a `<OverlayProvider>`. This is used to ensure that
 * the main content of the application is hidden from screen readers
 * if a modal or other overlay is opened. Only the top-most modal or
 * overlay should be accessible at once.
 */
export function OverlayProvider(props: ModalProviderProps) {
  return (
    <PortalProvider>
      <ModalProvider>
        <OverlayContainerTop {...props} />
      </ModalProvider>
    </PortalProvider>
  );
}

/**
 * An OverlayProvider acts as a container for the top-level application.
 * Any application that uses modal dialogs or other overlays should
 * be wrapped in a `<OverlayProvider>`. This is used to ensure that
 * the main content of the application is hidden from screen readers
 * if a modal or other overlay is opened. Only the top-most modal or
 * overlay should be accessible at once.
 */
export function OverlayProviderScoped(props: ModalProviderProps) {
  return (
    <ModalProvider>
      <OverlayContainerTop {...props} />
    </ModalProvider>
  );
}

/**
 * A container for overlays like modals and popovers. Renders the overlay
 * into a Portal which is placed at the end of the document body.
 * Also ensures that the overlay is hidden from screen readers if a
 * nested modal is opened. Only the top-most modal or overlay should
 * be accessible at once.
 */
export function OverlayContainer(props: ModalProviderProps) {
  const context = usePortalProvider();
  const overlayId = React.useRef<number | null>(null);
  let contents = <OverlayProviderScoped {...props} />;

  useEffect(
    () => {
      // Mount
      if (overlayId.current === null) {
        overlayId.current = context?.setOverlayItem(contents);
      }
      // Update
      else {
        context?.updateOverlayItem(overlayId.current, contents);
      }
    },
    // To re-render the child
    [props]
  );

  // Unmount
  useEffect(() => {
    return () => {
      if (overlayId.current) {
        context?.removeOverlayItem(overlayId.current);
      }
    };
  }, []);

  return null;
}
