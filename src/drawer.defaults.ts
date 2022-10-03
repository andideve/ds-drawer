import { DrawerOptions } from './drawer.types';

const defaults: Required<DrawerOptions> = {
  position: 'fixed',
  inset: {},
  zIndex: 9999,
  placement: 'top',
  duration: 200,
  unmountOnCollapse: true,
};

export default defaults;
