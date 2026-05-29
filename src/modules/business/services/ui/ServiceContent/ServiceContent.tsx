import { useState } from 'react';

import { Flex, Segmented } from '@common/ui-kit';
import { spaces, useTranslateOptions } from '@shared';

import { serviceViewType } from './model/constants';
import { ServicesCards } from './ui/ServicesCards/ServicesCards';
import { ServicesTable } from './ui/ServicesTable/ServicesTable';

import styled from 'styled-components';

import type { ServiceType } from '../../model/types';
import type { ServiceActionType, ViewModeType } from '../../types';

type ServiceContentProps = {
  services: ServiceType[];
  onAction: (action: ServiceActionType) => void;
};

// TODO (savtsynov) возможно стоит сделать стилизованные сегменты в будущем
const StyledSegmented = styled(Segmented<ViewModeType>)`
  width: fit-content;

  svg {
    vertical-align: middle;
  }
`;

export const ServiceContent = ({ services, onAction }: ServiceContentProps) => {
  const [viewMode, setViewMode] = useState<ViewModeType>('table');

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
