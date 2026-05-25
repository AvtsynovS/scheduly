import { useState } from 'react';

import { Flex, Segmented } from '@common/ui-kit';
import { spaces, useTranslateOptions } from '@shared';

import { mockServices } from '../../model/mocks';
import { serviceViewType } from './model/constants';
import { ServicesCards } from './ui/ServicesCards/ServicesCards';
import { ServicesTable } from './ui/ServicesTable/ServicesTable';

import styled from 'styled-components';

import type { ServiceActionType, ViewModeType } from '../../types';

type ServiceContentProps = {
  onAction: (action: ServiceActionType) => void;
};

// TODO (savtsynov) возможно стоит сделать стилизованные сегменты в будущем
const StyledSegmented = styled(Segmented<ViewModeType>)`
  width: fit-content;

  svg {
    vertical-align: middle;
  }
`;

export const ServiceContent = ({ onAction }: ServiceContentProps) => {
  const [viewMode, setViewMode] = useState<ViewModeType>('table');

  // TODO получаем сервисы с бэка
  const services = mockServices;

  const options = useTranslateOptions(serviceViewType);

  const handleChangeView = (view: ViewModeType) => setViewMode(view);

  return (
    <Flex vertical gap={spaces.m}>
      <StyledSegmented
        options={options}
        value={viewMode}
        onChange={handleChangeView}
      />
      {viewMode === 'table' ? (
        <ServicesTable services={services} onAction={onAction} />
      ) : (
        <ServicesCards services={services} onAction={onAction} />
      )}
    </Flex>
  );
};
