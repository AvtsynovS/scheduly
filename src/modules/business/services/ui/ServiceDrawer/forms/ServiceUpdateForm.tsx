import { ServiceForm } from './ServiceForm';

import type { ServiceType } from '../../../model/types';
import type { DictsType, ServiceValueType } from './model/types';

type ServiceUpdateFormProps = {
  service: ServiceType;
  dicts: DictsType;
  onClose: () => void;
};

export const ServiceUpdateForm = ({
  service,
  dicts,
  onClose,
}: ServiceUpdateFormProps) => {
  const defaultValues = {
    ...service,
    categories: service.categories.map(({ id }) => id),
  };

  const handleUpdateService = (data: ServiceValueType) => {
    console.log('update service', { id: service.id, ...data });
    onClose();
  };

  return (
    <ServiceForm
      dicts={dicts}
      defaultValues={defaultValues}
      onSubmit={handleUpdateService}
      onClose={onClose}
    />
  );
};
