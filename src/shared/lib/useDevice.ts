import { Grid } from '@common/ui-kit';

const { useBreakpoint } = Grid;

export const useDevice = () => {
  const screens = useBreakpoint();

  const isMobile = !!screens.xs && !screens.md;
  const isTablet = !!screens.md && !screens.lg;
  const isLaptop = !!screens.lg && !screens.xl;
  const isDesktop = !!screens.xl;

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isTabletUp: !!screens.md,
    isLaptopUp: !!screens.lg,
    isDesktopUp: !!screens.xl,
    isTabletDown: !screens.lg,
    isLaptopDown: !screens.xl,
  };
};
