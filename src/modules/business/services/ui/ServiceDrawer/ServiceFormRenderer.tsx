import { ServiceCreateForm } from './forms/ServiceCreateForm';
import { ServiceDuplicateForm } from './forms/ServiceDuplicateForm';
import { ServiceEditForm } from './forms/ServiceEditForm';

import type { ModeType } from '../../types';

type ServiceFormRendererProps = {
  mode: Exclude<ModeType, null>;
};

export const ServiceFormRenderer = ({ mode }: ServiceFormRendererProps) => {
  switch (mode.type) {
    case 'create':
      return <ServiceCreateForm />;

    case 'edit':
      return <ServiceEditForm id={mode.id} />;

    case 'duplicate':
    default:
      return <ServiceDuplicateForm id={mode.id} />;
  }
};
