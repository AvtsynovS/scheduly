import { ServiceModalContent } from './ServiceModalContent';

import type { ConfirmActionType } from '../../types';

type ServiceModalRendererProps = {
  mode: Exclude<ConfirmActionType, null>;
  onClose: () => void;
};

export const ServiceModalRenderer = ({
  mode,
  onClose,
}: ServiceModalRendererProps) => {
  const onDelete = () => {
    // TODO запрос на удаление услуги
    // TODO инвалидация списка услуг
    console.log('delete service id', mode.id);
    onClose();
  };

  const onArchive = () => {
    // TODO запрос на удаление услуги
    // TODO инвалидация списка услуг
    console.log('archive service id', mode.id);
    onClose();
  };

  return (
    <ServiceModalContent
      name={mode.name}
      type={mode.type}
      onClose={onClose}
      onConfirm={mode.type === 'delete' ? onDelete : onArchive}
    />
  );
};
