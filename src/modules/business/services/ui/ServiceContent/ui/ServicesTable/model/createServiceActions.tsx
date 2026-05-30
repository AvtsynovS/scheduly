import { ArchiveIcon, DeleteIcon, DuplicateIcon, EditIcon } from '@shared';

import type { ServiceActionType } from '../../../../../types';

type CreateServiceActionsProps = {
  id: string;
  name: string;
  onAction: (action: ServiceActionType) => void;
  translate: (key: string) => string;
};

export const createServiceActions = ({
  id,
  name,
  onAction,
  translate,
}: CreateServiceActionsProps) => {
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
          name,
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
          name,
        });
      },
    },
  ];
};
