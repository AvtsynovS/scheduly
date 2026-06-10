import { Flex, Typography } from '@common/ui-kit';
import { ModalFooter, spaces, useTranslate } from '@shared';

import type { ConfirmActionType } from '../../types';

const { Text } = Typography;

type CategoryModalContentProps = {
  name: string;
  type: NonNullable<ConfirmActionType>['type'];
  isLoading: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const CategoryModalContent = ({
  name,
  type,
  isLoading,
  onClose,
  onConfirm,
}: CategoryModalContentProps) => {
  const { translate, translateRich } = useTranslate();

  return (
    <Flex vertical gap={spaces.l}>
      <Text>
        {translateRich(
          `business.modal.content.category.${type}`,
          {},
          {
            name,
            strong: (chunks: React.ReactNode) => <Text strong>{chunks}</Text>,
          },
        )}
      </Text>
      <ModalFooter
        confirmText={translate('button.label.delete')}
        cancelText={translate('button.label.cancel')}
        isLoading={isLoading}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </Flex>
  );
};
