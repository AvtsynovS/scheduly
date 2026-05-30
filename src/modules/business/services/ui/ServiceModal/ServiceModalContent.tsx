import { Flex, Typography } from '@common/ui-kit';
import { spaces, useTranslate } from '@shared';

import { ModalFooter } from './ModalFooter';

import type { ConfirmActionType } from '../../types';

const { Text } = Typography;

type ServiceModalContentProps = {
  name: string;
  type: NonNullable<ConfirmActionType>['type'];
  onClose: () => void;
  onConfirm: () => void;
};

export const ServiceModalContent = ({
  name,
  type,
  onClose,
  onConfirm,
}: ServiceModalContentProps) => {
  const { translateRich } = useTranslate();

  return (
    <Flex vertical gap={spaces.l}>
      <Text>
        {translateRich(
          `business.modal.content.service.${type}`,
          {},
          {
            name,
            strong: (chunks: React.ReactNode) => <Text strong>{chunks}</Text>,
          },
        )}
      </Text>
      <ModalFooter onClose={onClose} onConfirm={onConfirm} />
    </Flex>
  );
};
