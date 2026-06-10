import { useQueryClient } from '@tanstack/react-query';

import { useNotification, useTranslate } from '@shared';

import { categoryQueryKeys } from '../../../model/queries/query.keys';
import { useCreateCategory } from '../../../model/queries/useCreateCategory';
import { CategoryForm } from './CategoryForm';

import type { CategoryValueType } from './model/types';

type CategoryCreateFormProps = { onClose: () => void };

export const CategoryCreateForm = ({ onClose }: CategoryCreateFormProps) => {
  const { translate } = useTranslate();
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { onCreateCategory, isCreateCategoryLoading } = useCreateCategory();

  const handleCreateCategory = async (category: CategoryValueType) => {
    try {
      await onCreateCategory(category);

      showNotification({
        type: 'success',
        title: translate('business.category.success.query.create.title'),
        description: translate(
          'business.category.success.query.create.description',
        ),
      });

      queryClient.invalidateQueries({ queryKey: categoryQueryKeys.all });
      onClose();
    } catch {
      showNotification({
        type: 'error',
        title: translate('business.category.error.query.create.title'),
        description: translate(
          'business.category.error.query.create.description',
        ),
      });
    }
  };

  return (
    <CategoryForm
      isLoading={isCreateCategoryLoading}
      onSubmit={handleCreateCategory}
      onClose={onClose}
    />
  );
};
