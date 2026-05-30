import { Flex, Grid, Typography } from '@common/ui-kit';
import {
  ActionsButton,
  BaseCard,
  ClockIcon,
  spaces,
  useNumberFormat,
  useTranslate,
} from '@shared';

import { createServiceActions } from '../ServicesTable/model/createServiceActions';
import { StatusTag } from '../StatusTag/StatusTag';

import styled from 'styled-components';

import type { ServiceType } from '../../../../model/types';
import type { ServiceActionType } from '../../../../types';

const { useBreakpoint } = Grid;
const { Text, Title } = Typography;
const { Content } = BaseCard;

type ServiceCardProps = {
  service: ServiceType;
  onAction: (action: ServiceActionType) => void;
};

const StyledBaseCard = styled(BaseCard)`
  background-color: ${({ theme }) => theme.bg.card.primary.base};
  cursor: default;

  .ant-card-head {
    border-bottom: ${({ theme }) => theme.borders.card.base};
  }
`;

const StyledTitle = styled(Title)`
  && {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledIcon = styled(ClockIcon)`
  color: ${({ theme }) => theme.colors.muted};
`;

const StyledPrice = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

export const ServiceCard = ({ service, onAction }: ServiceCardProps) => {
  const { translate } = useTranslate();
  const format = useNumberFormat();
  const screen = useBreakpoint();

  const { id, name, duration, price, status } = service;

  const isXs = screen.xs ?? false;
  const formattedPrice = format(price.amount, {
    type: 'currency',
    currency: price.currency,
  });
  const formattedDuration = format(duration, { type: 'duration' });

  return (
    <StyledBaseCard
      title={<StyledTitle level={5}>{name}</StyledTitle>}
      extra={
        <ActionsButton
          items={createServiceActions({ id, name, onAction, translate })}
        />
      }
      size={isXs ? 'small' : 'medium'}
      hoverable
    >
      <Content>
        <Flex align="flex-end" justify="space-between" gap={spaces.xxs}>
          <Flex vertical gap={spaces.xs}>
            <Flex gap={spaces.xs} align="center">
              <StyledIcon />
              <Text type="secondary">{formattedDuration}</Text>
            </Flex>
            <StyledPrice>{formattedPrice}</StyledPrice>
          </Flex>
          {status != 'active' && (
            <StatusTag status={status}>
              {translate(`business.tag.status.${status}`)}
            </StatusTag>
          )}
        </Flex>
      </Content>
    </StyledBaseCard>
  );
};
