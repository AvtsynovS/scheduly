import type { PriceType } from '../types';
import type { CurrencyType } from '@shared';

export type CategoryType = {
  id: string;
  name: string;
  color: string;
};

export type ServiceType = {
  id: string;
  name: string;
  categories: CategoryType[];
  duration: number;
  price: PriceType;
};

export type CreateServiceType = Omit<
  ServiceType,
  'id' | 'categories' | 'price'
> & {
  categories: string[];
  price: { amount: number; currency: CurrencyType };
};
