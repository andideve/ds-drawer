/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef } from 'react';
import { Box } from '@andideve/ds-box';
import { useUnmountOverlay } from '@andideve/ds-hooks/dist/use-unmount-overlay';

import DrawerMotion from './drawer-motion';
import defaults from './drawer.defaults';
import { DrawerPlacements, DrawerProps } from './drawer.types';

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
