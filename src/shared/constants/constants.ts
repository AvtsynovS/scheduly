import type { SizeType } from '../types/types';
import type { Breakpoint } from '@common/ui-kit/types';

type AntdBreakpointType = Exclude<Breakpoint, 'xxxl'>;

export const spaces: SizeType = {
  xxxs: '2px',
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '32px',
  xxxl: '50px',
};

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
} as const;

export const MEDIA = {
  up: (breakpoint: AntdBreakpointType) =>
    `@media (min-width: ${breakpoints[breakpoint]}px)`,

  down: (breakpoint: AntdBreakpointType) =>
    `@media (max-width: ${breakpoints[breakpoint] - 1}px)`,

  between: (min: AntdBreakpointType, max: AntdBreakpointType) =>
    `@media (min-width: ${breakpoints[min]}px) and (max-width: ${
      breakpoints[max] - 1
    }px)`,

  only: (breakpoint: AntdBreakpointType) => {
    const entries = Object.entries(breakpoints);

    const index = entries.findIndex(([key]) => key === breakpoint);

    const current = entries[index];
    const next = entries[index + 1];

    if (!next) {
      return `@media (min-width: ${current[1]}px)`;
    }

    return `@media (min-width: ${current[1]}px) and (max-width: ${
      next[1] - 1
    }px)`;
  },
};
