import { Spin } from '@shared';

import { mockCategories } from '../../model/mocks';
import { CategoryCreateForm } from './forms/CategoryCreateForm';
import { CategoryUpdateForm } from './forms/CategoryUpdateForm';

import type { ModeType } from '../../types';

type CategoryFormRendererProps = {
  mode: Exclude<ModeType, null>;
  onClose: () => void;
};

export const CategoryFormRenderer = ({
  mode,
  onClose,
}: CategoryFormRendererProps) => {
  switch (mode.type) {
    case 'create':
      return <CategoryCreateForm onClose={onClose} />;

    case 'edit': {
      // TODO (savtsynov) запрос на бэк для получения информации по категории
      const category = mockCategories.find(
        (category) => category.id === mode.id,
      );

      // TODO (savtsynov) отобразить лодер, пока загружается категория
      if (!category) return <Spin />;

      return <CategoryUpdateForm category={category} onClose={onClose} />;
    }

    default:
      break;
  }
};
