import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { Spin, useNotification, useTranslate } from '@shared';

import { categoryQueryKeys } from '../../../model/queries/query.keys';
import { useCategoryById } from '../../../model/queries/useCategoryById';
import { useUpdateCategory } from '../../../model/queries/useUpdateCategory';
import { CategoryForm } from './CategoryForm';

import type { CategoryValueType } from './model/types';

type CategoryUpdateFormProps = {
  id: string;
  onClose: () => void;
};

export const CategoryUpdateForm = ({
  id,
  onClose,
}: CategoryUpdateFormProps) => {
  const { translate } = useTranslate();
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { category, isCategoryLoading, isCategoryError } = useCategoryById(id);
  const { onUpdateCategory, isUpdateCategoryLoading } = useUpdateCategory();

  const handleUpdateCategory = async (data: CategoryValueType) => {
    try {
      await onUpdateCategory({ id, category: data });

      showNotification({
        type: 'success',
        title: translate('business.category.success.query.update.title'),
        description: translate(
          'business.category.success.query.update.description',
        ),
      });

      queryClient.invalidateQueries({ queryKey: categoryQueryKeys.all });
      onClose();
    } catch {
      showNotification({
        type: 'error',
        title: translate('business.category.error.query.update.title'),
        description: translate(
          'business.category.error.query.update.description',
        ),
      });
    }
  };

  useEffect(() => {
    if (isCategoryError) {
      showNotification({
        type: 'error',
        title: translate('business.category.error.query.category.title'),
        description: translate(
          'business.category.error.query.category.description',
        ),
      });
    }
  }, [isCategoryError, showNotification, translate]);

  if (isCategoryLoading) return <Spin />;

  return (
    <CategoryForm
      isLoading={isUpdateCategoryLoading}
      defaultValues={category}
      onSubmit={handleUpdateCategory}
      onClose={onClose}
    />
  );
};
