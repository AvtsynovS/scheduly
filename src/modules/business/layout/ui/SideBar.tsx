import { useEffect, useState } from 'react';

import { Button, Flex, Layout, Typography } from '@common/ui-kit';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  useDevice,
  useTranslate,
} from '@shared';

import { CommonMenu } from './CommonMenu';

import styled from 'styled-components';

const { Sider } = Layout;
const { Title } = Typography;

const ToggleWrapper = styled(Flex)<{ $collapsed: boolean }>`
  justify-content: ${({ $collapsed }) =>
    $collapsed ? 'center' : 'space-between'};
  padding: ${({ theme }) => theme.spaces.xs};
  padding-left: ${({ theme, $collapsed }) =>
    $collapsed ? theme.spaces.xs : theme.spaces.m};
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

export const SideBar = () => {
  const { isTabletDown } = useDevice();
  const translate = useTranslate();

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setCollapsed(isTabletDown);
  }, [isTabletDown]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      width={240}
      collapsedWidth={64}
    >
      <ToggleWrapper align="center" $collapsed={collapsed}>
        <StyledTitle $collapsed={collapsed} level={5}>
          {translate('business.sider.title.menu')}
        </StyledTitle>
        <Button
          type="text"
          size="small"
          onClick={toggleCollapsed}
          icon={collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        />
      </ToggleWrapper>
      <CommonMenu collapsed={collapsed} />
    </Sider>
  );
};
