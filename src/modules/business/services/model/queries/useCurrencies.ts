import { useQuery } from '@tanstack/react-query';

import { currencyApiClient } from '../../api/serviceRequests';
import { currencyQueryKeys } from './query.keys';

export const useCurrencies = () => {
  const {
    data: currencies,
    isLoading: isCurrencyLoading,
    isSuccess: isCurrencySuccess,
    isError: isCurrencyError,
  } = useQuery({
    queryKey: currencyQueryKeys.all,
    queryFn: () => currencyApiClient.getCurrencies(),
    retry: false,
    throwOnError: false,
  });

  return { currencies, isCurrencyLoading, isCurrencySuccess, isCurrencyError };
};
