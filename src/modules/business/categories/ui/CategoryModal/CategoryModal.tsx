import { Flex, Modal, Typography } from '@common/ui-kit';
import { DeleteIcon, spaces, useTranslate } from '@shared';

import { CategoryModalRenderer } from './CategoryModalRenderer';

import styled from 'styled-components';

import type { ConfirmActionType } from '../../types';

const { Title } = Typography;

type CategoryModalProps = { mode: ConfirmActionType; onClose: () => void };

const StyledModal = styled(Modal)`
  .ant-modal-footer {
    margin: 0;
  }
`;

const StyledTitle = styled(Flex)`
  svg {
    color: ${({ theme }) => theme.colors.archive};
  }
`;

export const CategoryModal = ({ mode, onClose }: CategoryModalProps) => {
  const { translate } = useTranslate();

  const open = mode !== null;
  const title = mode
    ? translate(`business.modal.title.category.${mode.type}`)
    : '';

  return (
    <StyledModal
      open={open}
      title={
        <StyledTitle align="center" gap={spaces.xs}>
          <DeleteIcon />
          <Title level={4}>{title}</Title>
        </StyledTitle>
      }
      onCancel={onClose}
      footer={false}
    >
      {mode && <CategoryModalRenderer mode={mode} onClose={onClose} />}
    </StyledModal>
  );
};
