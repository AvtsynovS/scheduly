import { useQuery } from '@tanstack/react-query';

import { categoryApiClient } from '../../api/categoryRequests';
import { categoryQueryKeys } from './query.keys';

export const useCategories = () => {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery({
    queryKey: categoryQueryKeys.all,
    queryFn: () => categoryApiClient.getCategories(),
    retry: false,
    throwOnError: false,
  });

  return {
    categories,
    isCategoriesLoading,
    isCategoriesError,
  };
};
