import { Badge, Col, Flex, Row, Typography } from '@common/ui-kit';
import { spaces, useGroupByKey, useTranslate } from '@shared';

import { ServiceCard } from './ui/ServiceCard/ServiceCard';

import styled from 'styled-components';

import type { ServiceType } from '../../../../types';

const { Title } = Typography;
const { Ribbon } = Badge;

type ServicesCardsProps = { services: ServiceType[] };

const StyledCategoryCard = styled(Flex)`
  padding: ${({ theme }) => theme.spaces.xl};
  background-color: ${({ theme }) => theme.bg.card.default.base};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.borders.default};
  box-shadow: ${({ theme }) => theme.shadows.layout.body};
`;

export const ServicesCards = ({ services }: ServicesCardsProps) => {
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
              <Title level={5}>
                {translate(`business.text.category.${category.name}`)}
              </Title>
            </Flex>
            <Row gutter={[16, 8]}>
              {services.map(({ id, ...service }) => (
                <Col key={id} xs={24} md={12} xl={8}>
                  <ServiceCard {...service} />
                </Col>
              ))}
            </Row>
          </StyledCategoryCard>
        </Ribbon>
      ))}
    </>
  );
};
