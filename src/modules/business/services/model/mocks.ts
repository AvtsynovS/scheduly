import type { ServiceStatusType } from '../types';
import type { ServiceType } from './types';
import type { CurrencyType } from '@shared';

const mockColors = {
  cyan: 'rgb(40, 100, 140)',
  red: 'rgb(140, 38, 38)',
  green: 'rgb(38, 140, 74)',
  violet: 'rgb(92, 38, 140)',
};

export const servicesStatsData = {
  averagePrice: 3455,
  averageTime: 94,
  categories: 4,
  total: 11,
};

export const ALL_CATEGORIES_OPTION = {
  label: 'business.dropdown.option.allCategories',
  value: 'all',
};

export const CURRENCY: CurrencyType[] = ['RUB', 'USD', 'EUR'];
export const STATUS: ServiceStatusType[] = ['active', 'inactive', 'archive'];

export const CATEGORIES = [
  {
    id: '1',
    value: 'Стрижка',
    color: mockColors.cyan,
  },
  {
    id: '2',
    value: 'Окрашивание',
    color: mockColors.red,
  },
  {
    id: '3',
    value: 'Укладка',
    color: mockColors.green,
  },
  {
    id: '4',
    value: 'Ногти',
    color: mockColors.violet,
  },
];

export const mockServices: ServiceType[] = [
  {
    id: '1',
    name: 'Женская стрижка',
    categories: [
      { id: '1', name: 'haircut', color: mockColors.cyan },
      { id: '2', name: 'coloring', color: mockColors.red },
    ],
    duration: 60,
    price: { amount: 2000, currency: 'RUB' },
    status: 'active',
  },
  {
    id: '2',
    name: 'Мужская стрижка',
    categories: [{ id: '1', name: 'haircut', color: mockColors.cyan }],
    duration: 45,
    price: { amount: 1500, currency: 'RUB' },
    status: 'inactive',
  },
  {
    id: '3',
    name: 'Детская стрижка',
    categories: [{ id: '1', name: 'haircut', color: mockColors.cyan }],
    duration: 30,
    price: { amount: 1000, currency: 'RUB' },
    status: 'archive',
  },
  {
    id: '4',
    name: 'Окрашивание в один тон',
    categories: [{ id: '2', name: 'coloring', color: mockColors.red }],
    duration: 120,
    price: { amount: 5000, currency: 'RUB' },
    status: 'inactive',
  },
  {
    id: '5',
    name: 'Мелирование',
    categories: [{ id: '2', name: 'coloring', color: mockColors.red }],
    duration: 180,
    price: { amount: 7000, currency: 'RUB' },
    status: 'active',
  },
  {
    id: '6',
    name: 'Балаяж',
    categories: [{ id: '2', name: 'coloring', color: mockColors.red }],
    duration: 210,
    price: { amount: 9000, currency: 'RUB' },
    status: 'active',
  },
  {
    id: '7',
    name: 'Укладка',
    categories: [{ id: '3', name: 'styling', color: mockColors.green }],
    duration: 45,
    price: { amount: 1500, currency: 'RUB' },
    status: 'active',
  },
  {
    id: '8',
    name: 'Вечерняя прическа',
    categories: [{ id: '3', name: 'styling', color: mockColors.green }],
    duration: 90,
    price: { amount: 3500, currency: 'RUB' },
    status: 'active',
  },
  {
    id: '9',
    name: 'Маникюр',
    categories: [{ id: '4', name: 'nails', color: mockColors.violet }],
    duration: 60,
    price: { amount: 1800, currency: 'RUB' },
    status: 'active',
  },
  {
    id: '10',
    name: 'Педикюр',
    categories: [{ id: '4', name: 'nails', color: mockColors.violet }],
    duration: 75,
    price: { amount: 2200, currency: 'RUB' },
    status: 'active',
  },
  {
    id: '11',
    name: 'Наращивание ногтей',
    categories: [{ id: '4', name: 'nails', color: mockColors.violet }],
    duration: 120,
    price: { amount: 3500, currency: 'RUB' },
    status: 'active',
  },
];
