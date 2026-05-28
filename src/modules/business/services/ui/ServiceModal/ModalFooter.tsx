import { Button, Flex } from '@common/ui-kit';
import { spaces, useTranslate } from '@shared';

type ModalFooterProps = { onClose: () => void; onConfirm: () => void };

export const ModalFooter = ({ onClose, onConfirm }: ModalFooterProps) => {
  const { translate } = useTranslate();

  return (
    <Flex gap={spaces.l} justify="flex-end">
      <Button onClick={onClose}>Отмена</Button>
      <Button type="primary" danger onClick={onConfirm}>
        {translate('button.label.delete')}
      </Button>
    </Flex>
  );
};
