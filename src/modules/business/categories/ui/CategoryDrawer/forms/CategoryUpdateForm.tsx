import { CategoryForm } from './CategoryForm';

import type { CategoryType } from '../../../model/types';
import type { CategoryValueType } from './model/types';

type CategoryUpdateFormProps = {
  category: CategoryType;
  onClose: () => void;
};

export const CategoryUpdateForm = ({
  category,
  onClose,
}: CategoryUpdateFormProps) => {
  const handleUpdateCategory = (data: CategoryValueType) => {
    console.log('update category', { id: category.id, ...data });
    onClose();
  };

  return (
    <CategoryForm
      defaultValues={category}
      onSubmit={handleUpdateCategory}
      onClose={onClose}
    />
  );
};
