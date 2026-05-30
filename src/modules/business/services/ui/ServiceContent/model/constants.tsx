import { CardIcon, TableIcon } from '@shared';

import type { ViewModeType } from '../../../types';
import type { SegmentedLabeledOption } from '@common/ui-kit/types';

export const serviceViewType: SegmentedLabeledOption<ViewModeType>[] = [
  {
    label: 'segmented.option.table',
    value: 'table',
    icon: <TableIcon />,
  },
  {
    label: 'segmented.option.cards',
    value: 'card',
    icon: <CardIcon />,
  },
];
