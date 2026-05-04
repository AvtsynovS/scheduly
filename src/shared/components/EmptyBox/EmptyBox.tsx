import { Flex, Typography } from '@common/ui-kit';

import styled from 'styled-components';

const { Text } = Typography;

type EmptyBoxProps = { description: string };

const StyledWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.s};
`;

export const EmptyBox = ({ description }: EmptyBoxProps) => {
  return (
    <StyledWrapper justify="center">
      <Text>{description}</Text>
    </StyledWrapper>
  );
};
