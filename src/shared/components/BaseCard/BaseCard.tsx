import { Card as CardKit } from '@common/ui-kit';

import styled from 'styled-components';

import type { CardProps } from '@common/ui-kit/types';

const StyledCard = styled(CardKit)`
  background-color: ${({ theme }) => theme.bg.card.default.base};
`;

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <StyledCard {...props}>
      <div>{children}</div>
    </StyledCard>
  );
};
