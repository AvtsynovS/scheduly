import type { NumberFormatConfigType } from '@shared';

export type ServicesStatsData = {
  averagePrice: number;
  averageTime: number;
  categories: number;
  total: number;
};

export type CategoryType = {
  id: string;
  name: 'haircut' | 'coloring' | 'styling' | 'nails';
  color: string;
};

export type MoneyType = {
  amount: number;
  currency: 'RUB' | 'USD' | 'EUR';
};

export type ServiceType = {
  id: string;
  name: string;
  categories: CategoryType[];
  duration: number;
  price: MoneyType;
};

export type ServicesStatsConfigType = {
  key: string;
  label: string;
  config: NumberFormatConfigType;
};

export type ViewModeType = 'table' | 'card';
