import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ErrorImage } from '../../assets';
import { useTranslate } from '@shared';

const { Title, Paragraph } = Typography;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// TODO (savtsynov) настроить тему
const StyledDescribe = styled(Paragraph)`
  font-size: 1.5rem;
`;

const StyledErrorImage = styled(ErrorImage)`
  height: 20vh;
  width: 50vw;
`;

export const ErrorPage = () => {
  const translate = useTranslate();

  return (
    <StyledWrapper>
      <StyledErrorImage />
      <Title level={3}>{translate('page.title.fallback')}</Title>
      <StyledDescribe type="secondary">
        {translate('page.description.fallback')}
      </StyledDescribe>
      <Link to="/">{translate('button.label.home')}</Link>
    </StyledWrapper>
  );
};
