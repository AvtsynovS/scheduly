import type { CurrencyType, ServiceType } from '../../../../model/types';
import type { PriceType, ServiceStatusType } from '../../../../types';

export type DictsType = {
  categories: {
    label: string;
    value: string;
    color: string;
  }[];
  currency: CurrencyType[];
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
  price: PriceType;
  status: ServiceStatusType;
};
