import { BoxProps } from '@andideve/ds-box';
import { DrawerMotionProps } from './drawer-motion';

export type DrawerPlacements = 'top' | 'right' | 'bottom' | 'left';
export interface DrawerOptions
  extends Pick<BoxProps, 'position' | 'zIndex'>,
    Pick<DrawerMotionProps, 'duration'> {
  inset?: Pick<BoxProps, 'top' | 'right' | 'bottom' | 'left'>;
  placement?: DrawerPlacements;
  unmountOnCollapse?: boolean;
}
export interface BaseDrawerProps
  extends DrawerOptions,
    Pick<BoxProps, 'ref' | 'as' | 'theme' | 'children' | 'className' | 'style'> {
  isOpen: boolean;
}

export type DrawerProps = BaseDrawerProps & BoxProps;
