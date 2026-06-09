import { useQuery } from '@tanstack/react-query';

import { categoryApiClient } from '../../api/categoryRequests';
import { categoryQueryKeys } from './query.keys';

export const useCategories = () => {
  const {
    data: categories,
    isLoading: isCategoryLoading,
    isSuccess: isCategorySuccess,
    isError: isCategoryError,
  } = useQuery({
    queryKey: categoryQueryKeys.all,
    queryFn: () => categoryApiClient.getCategories(),
    retry: false,
    throwOnError: false,
  });

  return { categories, isCategoryLoading, isCategorySuccess, isCategoryError };
};
