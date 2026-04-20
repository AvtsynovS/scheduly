import { Outlet } from 'react-router-dom';

// TODO (savtsynov) настроить тему для Button
import { Button, Flex, Layout, Typography } from '@common/ui-kit';
import { Avatar, LocaleButton, LogoutIcon, spaces, ThemeButton } from '@shared';

import styled from 'styled-components';

import type { PropsWithChildren } from 'react';

const { Header, Footer, Content } = Layout;
// TODO (savtsynov) настроить тему для Typography
const { Title, Text } = Typography;

const StyledWrapper = styled(Flex)`
  height: 100vh;
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
const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.foreground};

  && {
    margin: 0;
  }
`;

const StyledContent = styled(Content)`
  flex: 1;
  overflow: auto;
`;

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <StyledWrapper vertical>
      <StyledHeader>
        <StyledTitle level={3}>Company</StyledTitle>
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
      <StyledContent>{children || <Outlet />}</StyledContent>
      <Footer>Footer</Footer>
    </StyledWrapper>
  );
};
