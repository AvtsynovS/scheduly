import { Badge, Col, Flex, Row, Typography } from '@common/ui-kit';
import { spaces, useGroupByKey, useTranslate } from '@shared';

import { ServiceCard } from './ServiceCard';

import styled from 'styled-components';

import type { ServiceType } from '../../../../model/types';
import type { ServiceActionType } from '../../../../types';

const { Title } = Typography;
const { Ribbon } = Badge;

type ServicesCardsProps = {
  services: ServiceType[];
  onAction: (action: ServiceActionType) => void;
};

const StyledCategoryCard = styled(Flex)`
  padding: ${({ theme }) => theme.spaces.xl};
  background-color: ${({ theme }) => theme.bg.card.default.base};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.borders.default};
  box-shadow: ${({ theme }) => theme.shadows.layout.body};
`;

export const ServicesCards = ({ services, onAction }: ServicesCardsProps) => {
  const { translate } = useTranslate();

  const servicesByCategory = useGroupByKey(services, 'categories');

  return (
    <>
      {servicesByCategory.map(({ group: category, items: services }) => (
        <Ribbon
          key={category.id}
          text={translate(
            'business.badge.service',
            {},
            { count: services.length },
          )}
          color={category.color}
        >
          <StyledCategoryCard vertical gap={spaces.xl}>
            <Flex align="center" justify="space-between" gap={spaces.xs}>
              <Title level={5}>{category.name}</Title>
            </Flex>
            <Row gutter={[16, 8]}>
              {services.map((service) => (
                <Col key={service.id} xs={24} md={12} xl={8}>
                  <ServiceCard service={service} onAction={onAction} />
                </Col>
              ))}
            </Row>
          </StyledCategoryCard>
        </Ribbon>
      ))}
    </>
  );
};
