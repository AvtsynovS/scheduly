import { Flex, Modal, Typography } from '@common/ui-kit';
import { ArchiveIcon, DeleteIcon, spaces, useTranslate } from '@shared';

import { ServiceModalRenderer } from './ServiceModalRenderer';

import styled from 'styled-components';

import type { ConfirmActionType } from '../../types';

const { Title } = Typography;

type ServiceModalProps = { mode: ConfirmActionType; onClose: () => void };

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

export const ServiceModal = ({ mode, onClose }: ServiceModalProps) => {
  const { translate } = useTranslate();

  const open = mode !== null;
  const title = mode
    ? translate(`business.modal.title.service.${mode.type}`)
    : '';

  return (
    <StyledModal
      open={open}
      title={
        <StyledTitle align="center" gap={spaces.xs}>
          {mode?.type === 'delete' ? <DeleteIcon /> : <ArchiveIcon />}
          <Title level={4}>{title}</Title>
        </StyledTitle>
      }
      onCancel={onClose}
      footer={false}
    >
      {mode && <ServiceModalRenderer mode={mode} onClose={onClose} />}
    </StyledModal>
  );
};
