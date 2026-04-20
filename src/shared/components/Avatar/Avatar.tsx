import { Avatar as AvatarKit } from '@common/ui-kit';

import { UserIcon } from '../../assets';

import type { AvatarProps } from '@common/ui-kit/types';

export const Avatar = ({ icon = <UserIcon />, ...props }: AvatarProps) => {
  return <AvatarKit icon={icon} {...props} />;
};
