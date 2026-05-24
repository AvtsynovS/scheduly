import styled from 'styled-components';

type ServiceDuplicateFormProps = { id: string };

const StyledWrapper = styled.div`
  display: flex;
`;

export const ServiceDuplicateForm = ({ id }: ServiceDuplicateFormProps) => {
  console.log('ServiceDuplicateForm id', id);

  return <StyledWrapper>ServiceDuplicateForm</StyledWrapper>;
};
