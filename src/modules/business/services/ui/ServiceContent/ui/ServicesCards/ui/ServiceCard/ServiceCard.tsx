import { Button, Flex, Grid, Typography } from '@common/ui-kit';
import {
  BaseCard,
  ClockIcon,
  MoreIcon,
  spaces,
  useNumberFormat,
} from '@shared';

import styled from 'styled-components';

import type { MoneyType } from '../../../../../../types';

const { useBreakpoint } = Grid;
const { Text, Title } = Typography;
const { Content } = BaseCard;

type ServiceCardProps = {
  name: string;
  duration: number;
  price: MoneyType;
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

const StyledButton = styled(Button)`
  &.ant-btn-icon-only {
    width: fit-content;
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

export const ServiceCard = ({ name, duration, price }: ServiceCardProps) => {
  const format = useNumberFormat();
  const screen = useBreakpoint();

  const isXs = screen.xs ?? false;
  const formattedPrice = format(price.amount, {
    type: 'currency',
    currency: price.currency,
  });
  const formattedDuration = format(duration, { type: 'duration' });

  return (
    <StyledBaseCard
      title={<StyledTitle level={5}>{name}</StyledTitle>}
      extra={<StyledButton icon={<MoreIcon />} type="text" />}
      size={isXs ? 'small' : 'medium'}
      hoverable
    >
      <Content>
        <Flex vertical gap={spaces.xs}>
          <Flex gap={spaces.xs} align="center">
            <StyledIcon />
            <Text type="secondary">{formattedDuration}</Text>
          </Flex>
          <StyledPrice>{formattedPrice}</StyledPrice>
        </Flex>
      </Content>
    </StyledBaseCard>
  );
};
