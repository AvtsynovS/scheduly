import { Flex, Typography } from '@common/ui-kit';
import { ModalFooter, spaces, useTranslate } from '@shared';

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
  const { translate, translateRich } = useTranslate();

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
      <ModalFooter
        confirmText={translate(
          type === 'archive' ? 'button.label.archive' : 'button.label.delete',
        )}
        cancelText={translate('button.label.cancel')}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </Flex>
  );
};
