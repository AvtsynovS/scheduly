import type { ServiceType } from '../../../../model/types';
import type { ServiceStatusType } from '../../../../types';
import type { CurrencyType } from '@shared';

export type DictsType = {
  categories: {
    label: string;
    value: string;
    color: string;
  }[];
  currency: {
    label: CurrencyType;
    value: CurrencyType;
  }[];
  status: {
    label: string;
    value: ServiceStatusType;
  }[];
};

export type ServiceValueType = Omit<
  ServiceType,
  'id' | 'categories' | 'price'
> & {
  categories: string[];
  price: { amount: number; currency: CurrencyType };
  status: ServiceStatusType;
};
