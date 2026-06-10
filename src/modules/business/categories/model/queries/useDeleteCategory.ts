import { useMutation } from '@tanstack/react-query';

import { categoryApiClient } from '../../api/categoryRequests';
import { categoryMutationKeys } from './query.keys';

export const useDeleteCategory = () => {
  const { mutateAsync: onDeleteCategory, isPending: isDeleteCategoryLoading } =
    useMutation({
      mutationKey: categoryMutationKeys.update,
      mutationFn: categoryApiClient.deleteCategory,
      retry: false,
      throwOnError: false,
    });

  return { onDeleteCategory, isDeleteCategoryLoading };
};
