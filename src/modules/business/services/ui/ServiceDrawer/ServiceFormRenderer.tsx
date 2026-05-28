import { Spin, useTranslate } from '@shared';

import { CATEGORIES, CURRENCY, mockServices, STATUS } from '../../model/mocks';
import { ServiceCreateForm } from './forms/ServiceCreateForm';
import { ServiceDuplicateForm } from './forms/ServiceDuplicateForm';
import { ServiceUpdateForm } from './forms/ServiceUpdateForm';

import type { ModeType } from '../../types';

type ServiceFormRendererProps = {
  mode: Exclude<ModeType, null>;
  onClose: () => void;
};

export const ServiceFormRenderer = ({
  mode,
  onClose,
}: ServiceFormRendererProps) => {
  const { translate } = useTranslate();

  // TODO Dict получаем с бэка
  const categoryOptions = CATEGORIES.map(({ id, value, color }) => ({
    label: value,
    value: id,
    color,
  }));

  // TODO Dict получаем с бэка
  const currencyOptions = CURRENCY.map((code) => ({
    label: code,
    value: code,
  }));

  // TODO Dict получаем с бэка
  const statusOptions = STATUS.map((status) => ({
    label: translate(`business.select.option.${status}`),
    value: status,
  }));

  const dicts = {
    categories: categoryOptions,
    currency: currencyOptions,
    status: statusOptions,
  };

  switch (mode.type) {
    case 'create':
      return <ServiceCreateForm dicts={dicts} onClose={onClose} />;

    case 'edit': {
      // TODO (savtsynov) запрос на бэк для получения информации по сервису
      const service = mockServices.find((service) => service.id === mode.id);

      // TODO (savtsynov) отобразить лодер, пока загружается сервис
      if (!service) return <Spin />;

      return (
        <ServiceUpdateForm service={service} dicts={dicts} onClose={onClose} />
      );
    }

    case 'duplicate': {
      // TODO (savtsynov) запрос на бэк для получения информации по сервису
      const service = mockServices.find((service) => service.id === mode.id);

      // TODO (savtsynov) отобразить лодер, пока загружается сервис
      if (!service) return <Spin />;

      return (
        <ServiceDuplicateForm
          service={service}
          dicts={dicts}
          onClose={onClose}
        />
      );
    }

    default:
      break;
  }
};
