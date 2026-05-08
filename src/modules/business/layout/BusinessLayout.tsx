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
  useDevice,
} from '@shared';

import { DrawerSideBar } from './ui/DrawerSideBar';
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
  gap: ${({ theme }) => theme.spaces.xs};
  height: 64px;
  padding: ${({ theme }) => `${theme.spaces.xs} ${theme.spaces.m}`};
  background: ${({ theme }) => theme.bg.white};
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

export const BusinessLayout = () => {
  const { isMobile } = useDevice();

  return (
    <StyledWrapper vertical>
      <StyledHeader>
        {isMobile ? (
          <DrawerSideBar />
        ) : (
          <Flex align="center" gap={spaces.m}>
            <StyledIconWrapper>
              <CalendarIcon />
            </StyledIconWrapper>
            <Title level={3}>Scheduly</Title>
          </Flex>
        )}
        <Flex align="center" gap={isMobile ? spaces.xs : spaces.m}>
          <LocaleButton />
          <ThemeButton />
          <Flex align="center" gap={spaces.s}>
            <Avatar size="small" />
            {!isMobile && <Text>Иванов И</Text>}
          </Flex>
          <Button type="text" icon={<LogoutIcon />} />
        </Flex>
      </StyledHeader>
      <Layout>
        {!isMobile && <SideBar />}
        <Layout>
          <StyledContent>{<Outlet />}</StyledContent>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </StyledWrapper>
  );
};
