import styled from 'styled-components';

type ServiceEditFormProps = { id: string };

const StyledWrapper = styled.div`
  display: flex;
`;

export const ServiceEditForm = ({ id }: ServiceEditFormProps) => {
  console.log('ServiceEditForm id', id);

  return <StyledWrapper>ServiceEditForm</StyledWrapper>;
};
