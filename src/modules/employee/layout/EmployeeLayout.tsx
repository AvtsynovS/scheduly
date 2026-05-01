import { type PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

// TODO (savtsynov) настроить тему для Button
import { Button, Flex, Layout, Typography } from '@common/ui-kit';
import {
  Avatar,
  CalendarIcon,
  LocaleButton,
  LogoutIcon,
  spaces,
  ThemeButton,
} from '@shared';

import { SideBar } from './ui/SideBar';

import styled from 'styled-components';

const { Header, Footer, Content } = Layout;

const { Title, Text } = Typography;

const StyledWrapper = styled(Flex)`
  height: 100vh;
  overflow: hidden;
`;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 ${({ theme }) => theme.spaces.l};
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid;
`;

const StyledIconWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.xxs};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.sm};

  & svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledContent = styled(Content)`
  flex: 1;
  overflow: auto;
`;

export const EmployeeLayout = ({ children }: PropsWithChildren) => {
  return (
    <StyledWrapper vertical>
      <StyledHeader>
        <Flex align="center" gap={spaces.m}>
          <StyledIconWrapper>
            <CalendarIcon />
          </StyledIconWrapper>
          <Title level={3}>Scheduly</Title>
        </Flex>
        <Flex align="center" gap={spaces.m}>
          <LocaleButton />
          <ThemeButton />
          <Flex align="center" gap={spaces.s}>
            <Avatar size="small" />
            <Text>Иванов И</Text>
          </Flex>
          <Button type="text" icon={<LogoutIcon />} />
        </Flex>
      </StyledHeader>
      <Layout>
        <SideBar />
        <Layout>
          <StyledContent>{children || <Outlet />}</StyledContent>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </StyledWrapper>
  );
};
