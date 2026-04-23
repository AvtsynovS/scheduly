import { Flex, Spin as SpinKit } from '@common/ui-kit';

import styled from 'styled-components';

import type { SpinProps } from '@common/ui-kit/types';

const StyledWrapper = styled(Flex)`
  margin-top: ${({ theme }) => theme.spaces.xl};
  height: 100vh;
`;

export const Spin = (props: SpinProps) => {
  return (
    <StyledWrapper justify="center">
      <SpinKit {...props} />
    </StyledWrapper>
  );
};
