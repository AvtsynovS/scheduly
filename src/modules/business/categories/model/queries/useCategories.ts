import { useQuery } from '@tanstack/react-query';

import { categoryApiClient } from '../../api/categoryRequests';
import { categoryQueryKeys } from './query.keys';

export const useCategories = (search: string) => {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery({
    queryKey: categoryQueryKeys.all(search),
    queryFn: () => categoryApiClient.getCategories(search),
    retry: false,
    throwOnError: false,
  });

  return {
    categories,
    isCategoriesLoading,
    isCategoriesError,
  };
};
