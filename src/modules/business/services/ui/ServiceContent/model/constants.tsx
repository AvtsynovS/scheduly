import { CardIcon, TableIcon } from '@shared';

import type { ViewModeType } from '../../../types';
import type { SegmentedLabeledOption } from '@common/ui-kit/types';

export const serviceViewType: SegmentedLabeledOption<ViewModeType>[] = [
  {
    label: 'Таблица',
    value: 'table',
    icon: <TableIcon />,
  },
  {
    label: 'Карточки',
    value: 'card',
    icon: <CardIcon />,
  },
];
