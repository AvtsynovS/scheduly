import { BaseCard } from '@shared';

import styled from 'styled-components';

const { Footer, Content } = BaseCard;

type ServicesStatsCardProps = { value: string; description: string };

const StyledBaseCard = styled(BaseCard)`
  box-shadow: ${({ theme }) => theme.shadows.layout.body};
`;

export const ServicesStatsCard = ({
  value,
  description,
}: ServicesStatsCardProps) => {
  return (
    <StyledBaseCard>
      <Content>{value}</Content>
      <Footer>{description}</Footer>
    </StyledBaseCard>
  );
};
