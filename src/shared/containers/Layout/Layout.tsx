import { LayoutKit } from '@common/ui-kit';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Sider, Footer, Content } = LayoutKit;

const StyledLayout = styled(LayoutKit)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: gray;
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
        <StyledContent>
          <Outlet />
        </StyledContent>
      </LayoutKit>
      <Footer>Footer</Footer>
    </StyledLayout>
  );
};
