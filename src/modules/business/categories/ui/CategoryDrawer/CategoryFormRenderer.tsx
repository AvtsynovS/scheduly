import { CategoryCreateForm } from './forms/CategoryCreateForm';

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

    // case 'edit': {
    //   // TODO (savtsynov) запрос на бэк для получения информации по сервису
    //   const category = mockCategories.find((category) => category.id === mode.id);

    //   // TODO (savtsynov) отобразить лодер, пока загружается сервис
    //   if (!category) return <Spin />;

    //   return (
    //     <CategoryUpdateForm category={category} dicts={dicts} onClose={onClose} />
    //   );
    // }

    default:
      break;
  }
};
