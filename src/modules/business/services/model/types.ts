import type { PriceType, ServiceStatusType } from '../types';

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
  status: ServiceStatusType;
};
