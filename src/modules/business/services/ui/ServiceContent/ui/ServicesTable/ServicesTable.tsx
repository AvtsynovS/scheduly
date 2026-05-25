import { memo } from 'react';

import { Table } from '@common/ui-kit';
import {
  EmptyBox,
  useNumberFormat,
  useResponsiveColumns,
  useTranslate,
} from '@shared';

import { getServiceColumns } from './model/getServiceColumns';

import type { ServiceType } from '../../../../model/types';
import type { ServiceActionType } from '../../../../types';

type ServicesTableProps = {
  services: ServiceType[];
  onAction: (action: ServiceActionType) => void;
};

export const ServicesTable = memo(
  ({ services, onAction }: ServicesTableProps) => {
    const { translate, locale } = useTranslate();
    const format = useNumberFormat();

    const columns = useResponsiveColumns(
      getServiceColumns(translate, locale, format, onAction),
    );

    return (
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={services || []}
        locale={{
          emptyText: (
            <EmptyBox description={translate('table.description.empty')} />
          ),
        }}
      />
    );
  },
);

ServicesTable.displayName = 'ServicesTable';
