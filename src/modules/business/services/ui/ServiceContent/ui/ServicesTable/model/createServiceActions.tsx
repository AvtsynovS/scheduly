import { ArchiveIcon, DeleteIcon, DuplicateIcon, EditIcon } from '@shared';

import type { ServiceActionType } from '../../../../../types';

export const createServiceActions = (
  id: string,
  onAction: (action: ServiceActionType) => void,
  translate: (key: string) => string,
) => {
  return [
    {
      key: 'service-edit',
      label: translate('business.dropdown.option.edit'),
      icon: <EditIcon />,
      onClick: () => {
        onAction({
          type: 'edit',
          id,
        });
      },
    },
    {
      key: 'service-duplicate',
      label: translate('business.dropdown.option.duplicate'),
      icon: <DuplicateIcon />,
      onClick: () => {
        onAction({
          type: 'duplicate',
          id,
        });
      },
    },
    {
      key: 'service-archive',
      label: translate('business.dropdown.option.archive'),
      icon: <ArchiveIcon />,
      danger: true,
      onClick: () => {
        onAction({
          type: 'archive',
          id,
        });
      },
    },
    {
      key: 'service-delete',
      label: translate('business.dropdown.option.delete'),
      icon: <DeleteIcon />,
      danger: true,
      onClick: () => {
        onAction({
          type: 'delete',
          id,
        });
      },
    },
  ];
};
