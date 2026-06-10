import { useMutation } from '@tanstack/react-query';

import { categoryApiClient } from '../../api/categoryRequests';
import { categoryMutationKeys } from './query.keys';

export const useUpdateCategory = () => {
  const { mutateAsync: onUpdateCategory, isPending: isUpdateCategoryLoading } =
    useMutation({
      mutationKey: categoryMutationKeys.update,
      mutationFn: categoryApiClient.updateCategory,
      retry: false,
      throwOnError: false,
    });

  return { onUpdateCategory, isUpdateCategoryLoading };
};
