import type { ServiceType } from '../types';

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

export const CATEGORIES = [
  { label: 'business.dropdown.option.haircut', value: 'haircut' },
  { label: 'business.dropdown.option.coloring', value: 'coloring' },
  { label: 'business.dropdown.option.styling', value: 'styling' },
  { label: 'business.dropdown.option.nails', value: 'nails' },
];

export const mockServices: ServiceType[] = [
  {
    id: '1',
    name: 'Женская стрижка',
    category: 'haircut',
    duration: 60,
    price: 2000,
  },
  {
    id: '2',
    name: 'Мужская стрижка',
    category: 'haircut',
    duration: 45,
    price: 1500,
  },
  {
    id: '3',
    name: 'Детская стрижка',
    category: 'haircut',
    duration: 30,
    price: 1000,
  },
  {
    id: '4',
    name: 'Окрашивание в один тон',
    category: 'coloring',
    duration: 120,
    price: 5000,
  },
  {
    id: '5',
    name: 'Мелирование',
    category: 'coloring',
    duration: 180,
    price: 7000,
  },
  {
    id: '6',
    name: 'Балаяж',
    category: 'coloring',
    duration: 210,
    price: 9000,
  },
  {
    id: '7',
    name: 'Укладка',
    category: 'styling',
    duration: 45,
    price: 1500,
  },
  {
    id: '8',
    name: 'Вечерняя прическа',
    category: 'styling',
    duration: 90,
    price: 3500,
  },
  {
    id: '9',
    name: 'Маникюр',
    category: 'nails',
    duration: 60,
    price: 1800,
  },
  {
    id: '10',
    name: 'Педикюр',
    category: 'nails',
    duration: 75,
    price: 2200,
  },
  {
    id: '11',
    name: 'Наращивание ногтей',
    category: 'nails',
    duration: 120,
    price: 3500,
  },
];
