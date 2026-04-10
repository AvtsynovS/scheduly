import { Avatar as AvatarKit } from '@common/ui-kit';

import { UserIcon } from '../../assets';

import styled from 'styled-components';

import type { AvatarProps } from '@common/ui-kit/types';

const StyledWrapper = styled(AvatarKit)`
  background-color: ${({ theme }) => theme.controls.avatar.bg.default};
`;

export const Avatar = ({ icon = <UserIcon />, ...props }: AvatarProps) => {
  return <StyledWrapper icon={icon} {...props} />;
};
