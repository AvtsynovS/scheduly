import type { Breakpoint, ColumnType } from '@common/ui-kit/types';

export type SizeType = {
  xxxs: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

export type NumberFormatConfigType =
  | { type: 'currency'; currency: string }
  | { type: 'duration' }
  | { type: 'number' };

type ResponsiveMeta = {
  hideBefore?: Breakpoint;
  hideAfter?: Breakpoint;
  only?: Breakpoint[];
};

export type ResponsiveColumnType<T> = ColumnType<T> & ResponsiveMeta;

export type ResponsiveColumnsType<T> = ResponsiveColumnType<T>[];
