import { Button, Col, Flex, Row } from '@common/ui-kit';
import { MEDIA, PageHeader, PlusIcon, spaces, useTranslate } from '@shared';

import { useServicesStats } from '../lib/useServicesStats';
import { servicesStatsData } from '../model/mocks';
import { ServicesStatsCard } from './ServicesStatsCard';

import styled from 'styled-components';

const StyledWrapper = styled(Flex)`
  padding: ${({ theme }) => theme.spaces.m};

  @media ${MEDIA.xl} {
    padding: ${({ theme }) => theme.spaces.xxl};
  }
`;

export const ServicesPage = () => {
  const translate = useTranslate();
  const stats = useServicesStats(servicesStatsData);

  return (
    <StyledWrapper vertical gap={spaces.xl}>
      <PageHeader
        title={translate('business.page.title.services')}
        description={translate('business.page.description.services')}
        actions={
          <Button icon={<PlusIcon />} type="primary">
            {translate('business.button.label.add.service')}
          </Button>
        }
      />
      <Row gutter={[16, 8]}>
        {stats.map(({ key, value, description }) => (
          <Col key={key} xs={24} md={12} xl={6}>
            <ServicesStatsCard value={value} description={description} />
          </Col>
        ))}
      </Row>
    </StyledWrapper>
  );
};
