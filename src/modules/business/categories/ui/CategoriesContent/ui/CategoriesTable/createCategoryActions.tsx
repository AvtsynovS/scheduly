import { DeleteIcon, EditIcon } from '@shared';

import type { CategoryActionType } from '../../../../types';

type createCategoryActionsProps = {
  id: string;
  name: string;
  onAction: (action: CategoryActionType) => void;
  translate: (key: string) => string;
};

export const createCategoryActions = ({
  id,
  name,
  onAction,
  translate,
}: createCategoryActionsProps) => {
  return [
    {
      key: 'category-edit',
      label: translate('dropdown.option.edit'),
      icon: <EditIcon />,
      onClick: () => {
        onAction({
          type: 'edit',
          id,
        });
      },
    },
    {
      key: 'category-delete',
      label: translate('dropdown.option.delete'),
      icon: <DeleteIcon />,
      danger: true,
      onClick: () => {
        onAction({
          type: 'delete',
          id,
          name,
        });
      },
    },
  ];
};
