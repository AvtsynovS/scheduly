import { useMemo } from 'react';

import { Grid } from '@common/ui-kit';

import type {
  ResponsiveColumnsType,
  ResponsiveColumnType,
} from '../types/types';
import type { Breakpoint, ColumnsType } from '@common/ui-kit/types';

const { useBreakpoint } = Grid;

const breakpointOrder: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const getCurrentBreakpoint = (
  screens: Partial<Record<Breakpoint, boolean>>,
) => {
  const order: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

  return order.find((breakpoint) => screens[breakpoint]) || 'xs';
};

const isVisible = <T>(col: ResponsiveColumnType<T>, current: Breakpoint) => {
  const index = breakpointOrder.indexOf(current);

  if (col.only) {
    return col.only.includes(current);
  }

  if (col.hideBefore) {
    const hideIndex = breakpointOrder.indexOf(col.hideBefore);
    if (index < hideIndex) return false;
  }

  if (col.hideAfter) {
    const hideIndex = breakpointOrder.indexOf(col.hideAfter);
    if (index > hideIndex) return false;
  }

  return true;
};

export const useResponsiveColumns = <T>(
  cols: ResponsiveColumnsType<T>,
): ColumnsType<T> => {
  const screens = useBreakpoint();
  const current = getCurrentBreakpoint(screens);

  return useMemo(() => {
    return cols.filter((col) => isVisible(col, current));
  }, [cols, current]);
};
