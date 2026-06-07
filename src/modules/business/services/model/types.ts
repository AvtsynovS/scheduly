import type { PriceType, ServiceStatusType } from '../types';
import type { CurrencyCodeType } from '@shared';

export type CurrencyType = {
  code: CurrencyCodeType;
  label: string;
};

export type ServiceCategoryType = {
  id: string;
  name: string;
  color: string;
};

export type ServiceType = {
  id: string;
  name: string;
  categories: ServiceCategoryType[];
  duration: number;
  price: PriceType;
  status: ServiceStatusType;
};
