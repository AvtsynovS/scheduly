import { useState } from 'react';

import { Button, Dropdown } from '@common/ui-kit';

import { MoreIcon } from '../../assets';

import styled from 'styled-components';

import type { ItemType } from '@common/ui-kit/types';

type ActionsButtonProps = {
  items: (ItemType & { onClick: () => void })[];
};

const StyledButton = styled(Button)`
  &.ant-btn-icon-only {
    width: fit-content;
  }
`;

export const ActionsButton = ({ items }: ActionsButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuOpen = () => setIsOpen(!isOpen);

  return (
    <Dropdown
      open={isOpen}
      trigger={['click']}
      onOpenChange={toggleMenuOpen}
      menu={{
        items,
        onClick: ({ key }) => {
          const action = items.find((item) => item?.key === key);

          action?.onClick();
        },
      }}
    >
      <StyledButton icon={<MoreIcon />} type="text" />
    </Dropdown>
  );
};
