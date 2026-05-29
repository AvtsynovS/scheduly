import { useCallback, useMemo, useState } from 'react';

import { Button, Col, Flex, Row, Select } from '@common/ui-kit';
import {
  EmptyBox,
  FilterSelect,
  MEDIA,
  PageHeader,
  PlusIcon,
  spaces,
  useTranslate,
} from '@shared';

import { useServicesStats } from '../lib/useServicesStats';
import {
  ALL_CATEGORIES_OPTION,
  CATEGORIES,
  mockServices,
  servicesStatsData,
} from '../model/mocks';
import { ServiceContent } from '../ui/ServiceContent/ServiceContent';
import { ServiceDrawer } from '../ui/ServiceDrawer/ServiceDrawer';
import { ServiceModal } from '../ui/ServiceModal/ServiceModal';
import { ServicesStatsCard } from '../ui/ServicesStatsCard/ServicesStatsCard';

import styled from 'styled-components';

import type { ServiceType } from '../model/types';
import type { ConfirmActionType, ModeType, ServiceActionType } from '../types';

const StyledWrapper = styled(Flex)`
  padding: ${({ theme }) => theme.spaces.m};

  ${MEDIA.up('xl')} {
    padding: ${({ theme }) => theme.spaces.xxl};
  }
`;

const StyledSearchField = styled(Select)`
  width: 100%;
`;

const StyledFilterSelect = styled(FilterSelect)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  ${MEDIA.down('sm')} {
    span:not(.ant-btn-icon) {
      display: none;
    }
  }
`;

export const ServicesPage = () => {
  const { translate } = useTranslate();

  const stats = useServicesStats(servicesStatsData);

  const [drawerMode, setDrawerMode] = useState<ModeType>(null);
  const [confirmAction, setConfirmAction] = useState<ConfirmActionType>(null);

  const onCloseDrawer = () => setDrawerMode(null);
  const onCloseModal = () => setConfirmAction(null);

  const onServiceActions = useCallback((action: ServiceActionType) => {
    switch (action.type) {
      case 'create':
        setDrawerMode({ type: 'create' });
        break;
      case 'edit':
        setDrawerMode({ type: 'edit', id: action.id });
        break;
      case 'duplicate':
        setDrawerMode({ type: 'duplicate', id: action.id });
        break;
      case 'archive':
        setConfirmAction({ type: 'archive', id: action.id, name: action.name });
        break;
      case 'delete':
        setConfirmAction({ type: 'delete', id: action.id, name: action.name });
        break;
      default:
        break;
    }
  }, []);

  // TODO получаем сервисы с бэка
  const services = mockServices;

  const [filteredServices, setFilteredServices] =
    useState<ServiceType[]>(services);

  const options = useMemo(() => {
    const all = {
      ...ALL_CATEGORIES_OPTION,
      label: translate(ALL_CATEGORIES_OPTION.label),
    };

    const categories = CATEGORIES.map((category) => {
      return {
        ...category,
        label: category.value,
      };
    });

    return [all, ...categories];
  }, [translate]);

  const handleFilterChange = (value: string[]) => {
    // TODO (savtsynov) запрос на бэк с учетом фильтров
    if (value.includes('all')) {
      setFilteredServices(services);

      return;
    }

    const filtered = services.filter((service) =>
      service.categories.some((category) => value.includes(category.name)),
    );

    setFilteredServices(filtered);
  };

  return (
    <StyledWrapper vertical gap={spaces.xl}>
      <PageHeader
        title={translate('business.page.title.services')}
        description={translate('business.page.description.services')}
        actions={
          <StyledButton
            icon={<PlusIcon />}
            type="primary"
            onClick={() => onServiceActions({ type: 'create' })}
          >
            {translate('business.button.label.add.service')}
          </StyledButton>
        }
      />
      <Row gutter={[16, 8]}>
        {stats.map(({ key, value, description }) => (
          <Col key={key} xs={24} md={12} xl={6}>
            <ServicesStatsCard value={value} description={description} />
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 8]}>
        <Col xs={24} md={16} lg={18}>
          <StyledSearchField
            placeholder={translate('business.select.placeholder.search')}
            notFoundContent={
              <EmptyBox description={translate('empty.description')} />
            }
          />
        </Col>
        <Col xs={24} md={8} lg={6}>
          <StyledFilterSelect
            mode="multiple"
            defaultActiveFirstOption
            options={options}
            baseOption={ALL_CATEGORIES_OPTION}
            showSearch={{
              optionFilterProp: 'label',
            }}
            maxTagPlaceholder={(omittedValues) => `+${omittedValues.length}`}
            maxTagCount="responsive"
            allowClear
            onChange={handleFilterChange}
            emptyDescription={translate('empty.description')}
          />
        </Col>
      </Row>
      <ServiceContent services={filteredServices} onAction={onServiceActions} />
      <ServiceDrawer mode={drawerMode} onClose={onCloseDrawer} />
      <ServiceModal mode={confirmAction} onClose={onCloseModal} />
    </StyledWrapper>
  );
};
