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
  const onDelete = () => {
    // TODO запрос на удаление категории
    // TODO инвалидация списка категорий
    console.log('delete category id', mode.id);
    onClose();
  };

  return (
    <CategoryModalContent
      name={mode.name}
      type={mode.type}
      onClose={onClose}
      onConfirm={onDelete}
    />
  );
};
