import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Flex, Layout, Typography } from '@common/ui-kit';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Menu,
  useTranslate,
  useTranslateMenuItems,
} from '@shared';

import { items } from '../config/itemsMenu';

import styled from 'styled-components';

import type { SelectInfo } from '@common/ui-kit/types';

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
  const { businessId } = useParams();
  const { translate } = useTranslate();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const menuItems = useTranslateMenuItems(items);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onSelect = ({ key }: SelectInfo) => {
    navigate(`/business/${businessId}/${key}`);
  };

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
          {translate('sider.title.menu')}
        </StyledTitle>
        <Button
          type="text"
          size="small"
          onClick={toggleCollapsed}
          icon={collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        />
      </ToggleWrapper>
      <Menu
        items={menuItems}
        mode="inline"
        inlineCollapsed={collapsed}
        inlineIndent={12}
        defaultSelectedKeys={['dashboard']}
        tooltip={collapsed ? { placement: 'right' } : false}
        onSelect={onSelect}
      />
    </Sider>
  );
};
