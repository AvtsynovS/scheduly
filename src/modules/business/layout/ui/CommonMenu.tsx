import { useNavigate, useParams } from 'react-router-dom';

import { Menu } from '@common/ui-kit';
import { useTranslateMenuItems } from '@shared';

import { items } from '../config/itemsMenu';

import styled from 'styled-components';

import type { SelectInfo } from '@common/ui-kit/types';

type CommonMenuProps = {
  collapsed?: boolean;
  handleSelect?: () => void;
};

const StyledMenu = styled(Menu)`
  width: 100%;
  height: 100%;
`;

export const CommonMenu = ({ collapsed, handleSelect }: CommonMenuProps) => {
  const { businessId } = useParams();
  const navigate = useNavigate();

  const menuItems = useTranslateMenuItems(items);
  const selectedKey = location.pathname
    .replace(`/business/${businessId}/`, '')
    .split('/')[0];

  const onSelect = ({ key }: SelectInfo) => {
    navigate(`/business/${businessId}/${key}`);
    handleSelect?.();
  };

  return (
    <StyledMenu
      items={menuItems}
      mode="inline"
      inlineCollapsed={collapsed}
      inlineIndent={12}
      selectedKeys={[selectedKey ?? 'dashboard']}
      tooltip={collapsed ? { placement: 'right' } : false}
      onSelect={onSelect}
    />
  );
};
