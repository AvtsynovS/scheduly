import styled from 'styled-components';

import type { ReactNode } from 'react';

type SlotProps = {
  children: ReactNode;
  className?: string;
};

type VariantType = 'positive' | 'negative' | 'neutral';

type TrendProps = {
  value: string;
  variant?: VariantType;
  className?: string;
};

const StyledContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledTrend = styled.span<{
  $variant: VariantType;
}>`
  color: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'positive':
        return theme.colors.positive;
      case 'negative':
        return theme.colors.negative;
      default:
        return theme.colors.neutral;
    }
  }};
`;

const StyledFooter = styled.div`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Content = ({ children, ...props }: SlotProps) => (
  <StyledContent {...props}>{children}</StyledContent>
);

export const Label = ({ children, ...props }: SlotProps) => (
  <div {...props}>{children}</div>
);

export const TopRight = ({ children, ...props }: SlotProps) => (
  <div {...props}>{children}</div>
);

export const Footer = ({ children, ...props }: SlotProps) => (
  <StyledFooter {...props}>{children}</StyledFooter>
);

export const Trend = ({ value, variant = 'neutral', ...props }: TrendProps) => {
  return (
    <StyledTrend {...props} $variant={variant}>
      {value}
    </StyledTrend>
  );
};
