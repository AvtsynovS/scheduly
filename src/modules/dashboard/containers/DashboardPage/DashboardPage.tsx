import { useParams } from 'react-router-dom';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
`;

export const DashboardPage = () => {
  const { businessId } = useParams();

  return <StyledWrapper>{`DashboardPage ${businessId}`} </StyledWrapper>;
};
