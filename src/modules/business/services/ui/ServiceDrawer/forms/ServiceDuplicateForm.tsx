import { ServiceForm } from './ServiceForm';

import type { ServiceType } from '../../../model/types';
import type { DictsType, ServiceValueType } from './model/types';

type ServiceDuplicateFormProps = {
  service: ServiceType;
  dicts: DictsType;
  onClose: () => void;
};

export const ServiceDuplicateForm = ({
  service,
  dicts,
  onClose,
}: ServiceDuplicateFormProps) => {
  const defaultValues = {
    ...service,
    name: '',
    categories: service.categories.map(({ id }) => id),
  };

  const handleDuplicateService = (data: ServiceValueType) => {
    console.log('duplicate service', { id: service.id, ...data });
    onClose();
  };

  return (
    <ServiceForm
      dicts={dicts}
      defaultValues={defaultValues}
      onSubmit={handleDuplicateService}
      onClose={onClose}
    />
  );
};
