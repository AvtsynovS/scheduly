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
