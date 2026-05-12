import { useState } from 'react';

import { Flex, Segmented } from '@common/ui-kit';
import { spaces, useGroupByKey, useTranslateOptions } from '@shared';

import { mockServices } from '../../model/mocks';
import { serviceViewType } from './model/constants';
import { ServicesCards } from './ui/ServicesCards';
import { ServicesTable } from './ui/ServicesTable';

import styled from 'styled-components';

import type { ViewModeType } from '../../types';

// TODO (savtsynov) возможно стоит сделать стилизованные сегменты в будущем
const StyledSegmented = styled(Segmented<ViewModeType>)`
  width: fit-content;

  svg {
    vertical-align: middle;
  }
`;

export const ServiceContent = () => {
  const [viewMode, setViewMode] = useState<ViewModeType>('table');

  // TODO получаем сервисы с бэка
  const services = mockServices;

  const servicesByCategory = useGroupByKey(services, 'category');
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
        <ServicesTable />
      ) : (
        <ServicesCards services={servicesByCategory} />
      )}
    </Flex>
  );
};
