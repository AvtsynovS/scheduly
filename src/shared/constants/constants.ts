import type { SizeType } from '../types/types';

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

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const MEDIA = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,
};
