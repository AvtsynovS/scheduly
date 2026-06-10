import { useQueryClient } from '@tanstack/react-query';

import { useNotification, useTranslate } from '@shared';

import { categoryQueryKeys } from '../../model/queries/query.keys';
import { useDeleteCategory } from '../../model/queries/useDeleteCategory';
import { CategoryModalContent } from './CategoryModalContent';

import type { ConfirmActionType } from '../../types';

type CategoryModalRendererProps = {
  mode: Exclude<ConfirmActionType, null>;
  onClose: () => void;
};

export const CategoryModalRenderer = ({
  mode,
  onClose,
}: CategoryModalRendererProps) => {
  const { translate } = useTranslate();
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { onDeleteCategory, isDeleteCategoryLoading } = useDeleteCategory();

  const handleDeleteCategory = async () => {
    try {
      await onDeleteCategory(mode.id);

      showNotification({
        type: 'success',
        title: translate('business.category.success.query.delete.title'),
        description: translate(
          'business.category.success.query.delete.description',
        ),
      });

      queryClient.invalidateQueries({ queryKey: categoryQueryKeys.all });
      onClose();
    } catch {
      showNotification({
        type: 'error',
        title: translate('business.category.error.query.delete.title'),
        description: translate(
          'business.category.error.query.delete.description',
        ),
      });
    }
  };

  return (
    <CategoryModalContent
      name={mode.name}
      type={mode.type}
      isLoading={isDeleteCategoryLoading}
      onClose={onClose}
      onConfirm={handleDeleteCategory}
    />
  );
};
