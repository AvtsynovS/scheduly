import { useQuery } from '@tanstack/react-query';

import { categoryApiClient } from '../../api/categoryRequests';
import { categoryQueryKeys } from './query.keys';

export const useCategoryById = (id: string) => {
  const {
    data: category,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useQuery({
    queryKey: categoryQueryKeys.one(id),
    queryFn: () => categoryApiClient.getCategoryById(id),
    retry: false,
    throwOnError: false,
    enabled: !!id,
  });

  return {
    category,
    isCategoryLoading,
    isCategoryError,
  };
};
