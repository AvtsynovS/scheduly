import { Tag } from '@common/ui-kit';

import styled, { css } from 'styled-components';

import type { ServiceStatusType } from '../../../../model/types';
import type { PropsWithChildren } from 'react';

type StatusTagProps = { status: ServiceStatusType };

const StyledTag = styled(Tag)<{
  $status: ServiceStatusType;
}>`
  ${({ $status, theme }) => {
    switch ($status) {
      case 'inactive':
        return css`
          color: ${theme.colors.inactive};
          background: ${theme.bg.inactive};
          border-color: ${theme.colors.inactive};
        `;

      case 'archive':
        return css`
          color: ${theme.colors.archive};
          background: ${theme.bg.archive};
          border-color: ${theme.colors.archive};
        `;

      case 'active':
      default:
        break;
    }
  }}
`;

export const StatusTag = ({
  status,
  children,
}: PropsWithChildren<StatusTagProps>) => {
  return (
    <StyledTag closable={false} $status={status}>
      {children}
    </StyledTag>
  );
};
