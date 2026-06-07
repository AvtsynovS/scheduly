import type { CurrencyType } from '../model/types';

export type CurrencyResponseType = CurrencyType;

export type CurrencyApiClientType = {
  getCurrencies: () => Promise<CurrencyResponseType[]>;
};
