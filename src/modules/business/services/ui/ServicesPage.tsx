import { useMemo } from 'react';

import { Button, Col, Flex, Grid, Row, Select } from '@common/ui-kit';
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
  servicesStatsData,
} from '../model/mocks';
import { ServiceContent } from './ServiceContent/ServiceContent';
import { ServicesStatsCard } from './ServicesStatsCard';

import styled from 'styled-components';

const { useBreakpoint } = Grid;

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
  const screens = useBreakpoint();

  const stats = useServicesStats(servicesStatsData);

  const maxTagCount =
    !screens.md || screens.xxxl ? undefined : screens.xxl ? 2 : 1;

  const options = useMemo(() => {
    return [ALL_CATEGORIES_OPTION, ...CATEGORIES].map(({ value, label }) => ({
      label: translate(label),
      value,
    }));
  }, [translate]);

  const handleFilterChange = (value: string[]) => {
    // TODO (savtsynov) запрос на бэк с учетом фильтров
    console.log('filter value', value);
  };

  return (
    <StyledWrapper vertical gap={spaces.xl}>
      <PageHeader
        title={translate('business.page.title.services')}
        description={translate('business.page.description.services')}
        actions={
          <StyledButton icon={<PlusIcon />} type="primary">
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
            maxTagCount={maxTagCount}
            allowClear
            onChange={handleFilterChange}
            emptyDescription={translate('empty.description')}
            allTagLabel={translate('business.select.option.allCategories')}
          />
        </Col>
      </Row>
      <ServiceContent />
    </StyledWrapper>
  );
};
