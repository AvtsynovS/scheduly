import type { CurrencyCodeType, NumberFormatConfigType } from '@shared';

export type ServicesStatsData = {
  averagePrice: number;
  averageTime: number;
  categories: number;
  total: number;
};

export type PriceType = {
  amount: number;
  currency: CurrencyCodeType;
};

export type ServiceStatusType = 'active' | 'inactive' | 'archive';

export type ServicesStatsConfigType = {
  key: string;
  label: string;
  config: NumberFormatConfigType;
};

export type ViewModeType = 'table' | 'card';

export type ServiceActionType =
  | { type: 'create' }
  | { type: 'edit'; id: string }
  | { type: 'duplicate'; id: string }
  | { type: 'archive'; id: string; name: string }
  | { type: 'delete'; id: string; name: string };

export type ModeType = Extract<
  ServiceActionType,
  { type: 'create' | 'edit' | 'duplicate' }
> | null;

export type ConfirmActionType = Extract<
  ServiceActionType,
  { type: 'archive' | 'delete' }
> | null;
