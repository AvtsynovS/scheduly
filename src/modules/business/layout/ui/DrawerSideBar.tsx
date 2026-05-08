import { useState } from 'react';

import { Button, Drawer, Flex, Typography } from '@common/ui-kit';
import { MenuIcon, useTranslate } from '@shared';

import { CommonMenu } from './CommonMenu';

import styled from 'styled-components';

const { Title } = Typography;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;

    div {
      height: 100%;
    }
  }
`;

const StyledTitle = styled(Title)<{ $collapsed: boolean }>`
  max-width: ${({ $collapsed }) => ($collapsed ? '0px' : '120px')};
  overflow: hidden;

  opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
  transform: ${({ $collapsed }) =>
    $collapsed ? 'translateX(-6px)' : 'translateX(0)'};

  transition: all 0.15s ease;
  white-space: nowrap;
`;

const StyledButton = styled(Button)`
  padding: 0;
`;

export const DrawerSideBar = () => {
  const translate = useTranslate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <StyledButton type="text" icon={<MenuIcon />} onClick={toggleDrawerOpen}>
        <Title level={3}>Scheduly</Title>
      </StyledButton>

      <StyledDrawer
        title={
          <StyledTitle $collapsed={false} level={5}>
            {translate('business.sider.title.menu')}
          </StyledTitle>
        }
        placement="left"
        open={drawerOpen}
        onClose={toggleDrawerOpen}
        closable={{ placement: 'end' }}
      >
        <Flex vertical>
          <CommonMenu handleSelect={toggleDrawerOpen} />
        </Flex>
      </StyledDrawer>
    </>
  );
};
