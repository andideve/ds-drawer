/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useState, useEffect } from 'react';
import { Box } from '@andideve/ds-box';

import DrawerMotion from './drawer-motion';
import defaults from './drawer.defaults';
import { DrawerPlacements, DrawerProps } from './drawer.types';

function useTransitionState(isChange: boolean, duration: number) {
  const [state, setState] = useState<'start' | 'end'>('end');

  useEffect(() => {
    setState('start');
    const timeoutId = setTimeout(() => setState('end'), duration);
    return () => clearTimeout(timeoutId);
  }, [isChange]);

  return state;
}

function useUnmountOverlay(isOpen: boolean, duration: number) {
  const [shouldUnmount, setShouldUnmount] = useState(!isOpen);

  const state = useTransitionState(isOpen, duration);

  useEffect(() => {
    setShouldUnmount(!isOpen && state === 'end');
  }, [state]);

  return shouldUnmount;
}

const insetDefaults: Record<DrawerPlacements, DrawerProps['inset']> = {
  top: { top: 0, left: 0, right: 0 },
  right: { right: 0, top: 0, bottom: 0 },
  bottom: { bottom: 0, left: 0, right: 0 },
  left: { left: 0, top: 0, bottom: 0 },
};

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      isOpen,
      position = defaults.position,
      inset = defaults.inset,
      zIndex = defaults.zIndex,
      placement = defaults.placement,
      duration = defaults.duration,
      unmountOnCollapse = defaults.unmountOnCollapse,
      ...rest
    },
    ref,
  ) => {
    const shouldUnmount = useUnmountOverlay(unmountOnCollapse ? isOpen : false, duration);
    return (
      <Box
        ref={ref}
        position={position}
        {...insetDefaults[placement]}
        {...inset}
        zIndex={zIndex}
        {...rest}
      >
        <DrawerMotion
          placement={placement}
          duration={duration}
          className={isOpen ? 'expand' : undefined}
        >
          {!(unmountOnCollapse && shouldUnmount) && children}
        </DrawerMotion>
      </Box>
    );
  },
);

export default Drawer;
