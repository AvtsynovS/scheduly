import { Flex } from '@common/ui-kit';

import { spaces } from '../../constants';

import styled from 'styled-components';

import type { PropsWithChildren } from 'react';

type FieldWrapperProps = { className?: string };

const StyledWrapper = styled(Flex)`
  position: relative;
  width: 100%;
`;

export const FieldWrapper = ({
  className,
  children,
}: PropsWithChildren<FieldWrapperProps>) => {
  return (
    <StyledWrapper
      className={className}
      vertical
      align={'stretch'}
      gap={spaces.xxs}
    >
      {children}
    </StyledWrapper>
  );
};
