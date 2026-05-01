import type { ServicesStatsConfigType } from '../types';

export const servicesStatsConfig: ServicesStatsConfigType[] = [
  {
    key: 'total',
    label: 'business.stats.total',
    config: { type: 'number' },
  },
  {
    key: 'categories',
    label: 'business.stats.categories',
    config: { type: 'number' },
  },
  {
    key: 'averagePrice',
    label: 'business.stats.average.price',
    config: { type: 'currency', currency: 'RUB' },
  },
  {
    key: 'averageTime',
    label: 'business.stats.average.time',
    config: { type: 'duration', unit: 'minute' },
  },
];
