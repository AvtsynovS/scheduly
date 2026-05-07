import type { NumberFormatConfigType } from '@shared';

export type ServicesStatsData = {
  averagePrice: number;
  averageTime: number;
  categories: number;
  total: number;
};

export type CategoryType = 'haircut' | 'coloring' | 'styling' | 'nails';

export type ServiceType = {
  id: string;
  name: string;
  category: CategoryType; // массив?
  duration: number;
  price: number;
};

export type ServicesStatsConfigType = {
  key: string;
  label: string;
  config: NumberFormatConfigType;
};
