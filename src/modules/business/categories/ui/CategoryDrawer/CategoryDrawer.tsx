import { Drawer } from '@common/ui-kit';
import { useTranslate } from '@shared';

import { CategoryFormRenderer } from './CategoryFormRenderer';

import type { ModeType } from '../../types';

type CategoryDrawerProps = { mode: ModeType; onClose: () => void };

export const CategoryDrawer = ({ mode, onClose }: CategoryDrawerProps) => {
  const { translate } = useTranslate();

  const open = mode !== null;
  const title = mode
    ? translate(`business.drawer.title.category.${mode.type}`)
    : '';

  return (
    <Drawer
      open={open}
      title={title}
      closable={{ placement: 'end' }}
      onClose={onClose}
      destroyOnHidden
    >
      {mode && <CategoryFormRenderer mode={mode} onClose={onClose} />}
    </Drawer>
  );
};
