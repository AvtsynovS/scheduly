import { Outlet } from 'react-router-dom';

import { Layout as LayoutKit } from '@common/ui-kit';

import styled from 'styled-components';

const { Header, Sider, Footer, Content } = LayoutKit;

const StyledLayout = styled(LayoutKit)`
  display: flex;
  width: 1440px;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spaces.l}`};
  background-color: ${({ theme }) => theme.bg.default};
  box-sizing: border-box;
`;

const StyledContent = styled(Content)`
  height: 100%;
`;

export const Layout = () => {
  return (
    <StyledLayout>
      <Header>Header</Header>
      <LayoutKit>
        <Sider>Sider</Sider>
        <LayoutKit>
          <StyledContent>
            <Outlet />
          </StyledContent>
          <Footer>Footer</Footer>
        </LayoutKit>
      </LayoutKit>
    </StyledLayout>
  );
};
