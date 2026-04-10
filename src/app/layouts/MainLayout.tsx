import { Outlet } from 'react-router-dom';

import { LocalizationButton } from '@common/localization';
import { ThemeButton } from '@common/themes';
// TODO (savtsynov) настроить тему для Button
import { Button, Flex, Layout, Typography } from '@common/ui-kit';
import { Avatar, LogoutIcon, spaces } from '@shared';

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
  background: ${({ theme }) => theme.bg.default};
  border-bottom: ${({ theme }) => theme.borders.default};
`;
const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.default};

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
          <LocalizationButton />
          <ThemeButton />
          <Flex align="center" gap={spaces.s}>
            <Avatar />
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
