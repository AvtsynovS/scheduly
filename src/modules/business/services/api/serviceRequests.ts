import { httpClient } from '@common/data-access';

import type {
  CurrencyApiClientType,
  CurrencyResponseType,
} from './requestTypes';

const getCurrencies = async () => {
  const { data } = await httpClient.request<CurrencyResponseType[]>({
    url: `/currencies`,
    method: 'GET',
  });

  return data;
};

export const currencyApiClient: CurrencyApiClientType = {
  getCurrencies,
};
