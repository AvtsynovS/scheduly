import { Menu as MenuKit } from '@common/ui-kit';

import styled from 'styled-components';

import type { MenuProps } from '@common/ui-kit/types';

const StyledMenu = styled(MenuKit)`
  height: 100%;
`;

export const Menu = (props: MenuProps) => {
  return <StyledMenu {...props} />;
};
