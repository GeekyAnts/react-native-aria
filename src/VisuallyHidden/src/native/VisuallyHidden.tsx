import type React from 'react';
import { useScreenReaderEnabled } from './useScreenReaderEnabled';

export function VisuallyHidden({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement | null {
  const screenReaderEnabled = useScreenReaderEnabled();

  return screenReaderEnabled ? children : null;
}
