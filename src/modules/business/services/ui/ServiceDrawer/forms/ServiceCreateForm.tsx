import { ServiceForm } from './ServiceForm';

import type { DictsType, ServiceValueType } from './model/types';

type ServiceCreateFormProps = {
  dicts: DictsType;
  onClose: () => void;
};

export const ServiceCreateForm = ({
  onClose,
  dicts,
}: ServiceCreateFormProps) => {
  const handleCreateService = (service: ServiceValueType) => {
    console.log('new service', service);
    onClose();
  };

  return (
    <ServiceForm
      dicts={dicts}
      onSubmit={handleCreateService}
      onClose={onClose}
    />
  );
};
