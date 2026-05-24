import { Typography } from '@common/ui-kit';

import styled from 'styled-components';

import type { TextProps } from '@common/ui-kit/types';

const { Text } = Typography;

type ErrorProps = { error: string } & Omit<TextProps, 'children'>;

const StyledError = styled(Text)`
  position: absolute;
  left: ${({ theme }) => theme.spaces.xxs};
  bottom: 0;

  color: ${({ theme }) => theme.colors.error};

  font-size: ${({ theme }) => theme.fontSize.xs};

  transform: translateY(100%);
`;

export const Error = ({ error, ...props }: ErrorProps) => {
  return <StyledError {...props}>{error}</StyledError>;
};
