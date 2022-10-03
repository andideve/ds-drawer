import styled, { CSSObject } from '@emotion/styled';
import { DrawerPlacements } from './drawer.types';

export interface DrawerMotionProps {
  placement: DrawerPlacements;
  duration: number;
}

export const DrawerMotion = styled.div<DrawerMotionProps>(
  ({ duration }) => ({
    transition: `opacity ${duration}ms linear, transform ${duration}ms linear`,
  }),
  ({ placement }) => {
    return (
      {
        top: {
          opacity: 0,
          transform: 'translateY(-1.5rem)',
          '&.expand': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        right: {
          opacity: 0,
          transform: 'translateX(1.5rem)',
          '&.expand': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        bottom: {
          opacity: 0,
          transform: 'translateY(1.5rem)',
          '&.expand': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        left: {
          opacity: 0,
          transform: 'translateX(-1.5rem)',
          '&.expand': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      } as Record<DrawerPlacements, CSSObject>
    )[placement];
  },
);

export default DrawerMotion;
