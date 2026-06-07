import { Button, Flex } from '@common/ui-kit';
import { spaces } from '@shared';

type ModalFooterProps = {
  confirmText: string;
  cancelText: string;
  onClose: () => void;
  onConfirm: () => void;
};

export const ModalFooter = ({
  confirmText,
  cancelText,
  onClose,
  onConfirm,
}: ModalFooterProps) => {
  return (
    <Flex gap={spaces.l} justify="flex-end">
      <Button onClick={onClose}>{cancelText}</Button>
      <Button type="primary" danger onClick={onConfirm}>
        {confirmText}
      </Button>
    </Flex>
  );
};
