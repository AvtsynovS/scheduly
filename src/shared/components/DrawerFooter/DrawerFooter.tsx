import { Button, Flex } from '@common/ui-kit';
import { spaces } from '@shared';

type DrawerFooterProps = {
  confirmText: string;
  cancelText: string;
  isLoading: boolean;
  onClose: () => void;
  onConfirm?: () => void;
};

export const DrawerFooter = ({
  confirmText,
  cancelText,
  isLoading,
  onClose,
}: DrawerFooterProps) => {
  return (
    <Flex gap={spaces.m} align="center" justify="space-between">
      <Button block disabled={isLoading} onClick={onClose}>
        {cancelText}
      </Button>
      <Button
        htmlType="submit"
        block
        type="primary"
        disabled={isLoading}
        loading={isLoading}
      >
        {confirmText}
      </Button>
    </Flex>
  );
};
