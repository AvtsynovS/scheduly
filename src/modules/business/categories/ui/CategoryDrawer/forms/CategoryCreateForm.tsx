import { CategoryForm } from './CategoryForm';

import type { CategoryValueType } from './model/types';

type CategoryCreateFormProps = { onClose: () => void };

export const CategoryCreateForm = ({ onClose }: CategoryCreateFormProps) => {
  const handleCreateCategory = (category: CategoryValueType) => {
    console.log('new category', category);
    onClose();
  };

  return <CategoryForm onSubmit={handleCreateCategory} onClose={onClose} />;
};
