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
      return <CategoryUpdateForm id={mode.id} onClose={onClose} />;
    }

    default:
      break;
  }
};
