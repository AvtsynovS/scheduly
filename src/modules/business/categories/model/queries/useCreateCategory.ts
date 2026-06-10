import { useMutation } from '@tanstack/react-query';

import { categoryApiClient } from '../../api/categoryRequests';
import { categoryMutationKeys } from './query.keys';

export const useCreateCategory = () => {
  const { mutateAsync: onCreateCategory, isPending: isCreateCategoryLoading } =
    useMutation({
      mutationKey: categoryMutationKeys.create,
      mutationFn: categoryApiClient.createCategory,
      retry: false,
      throwOnError: false,
    });

  return { onCreateCategory, isCreateCategoryLoading };
};
