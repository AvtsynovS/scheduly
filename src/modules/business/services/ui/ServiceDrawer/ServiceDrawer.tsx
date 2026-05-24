import { Drawer } from '@common/ui-kit';
import { useTranslate } from '@shared';

import { ServiceFormRenderer } from './ServiceFormRenderer';

import type { ModeType } from '../../types';

type ServiceDrawerProps = { mode: ModeType; onClose: () => void };

export const ServiceDrawer = ({ mode, onClose }: ServiceDrawerProps) => {
  const { translate } = useTranslate();

  const open = mode !== null;
  const title = mode
    ? translate(`business.drawer.title.service.${mode.type}`)
    : '';

  return (
    <Drawer
      open={open}
      title={title}
      closable={{ placement: 'end' }}
      onClose={onClose}
    >
      {mode && <ServiceFormRenderer mode={mode} />}
    </Drawer>
  );
};
