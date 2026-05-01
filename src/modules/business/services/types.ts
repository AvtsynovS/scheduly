import type { FormatConfigType } from '@shared';

export type ServicesStatsData = {
  averagePrice: number;
  averageTime: number;
  categories: number;
  total: number;
};

export type ServicesStatsConfigType = {
  key: string;
  label: string;
  config: FormatConfigType;
};
