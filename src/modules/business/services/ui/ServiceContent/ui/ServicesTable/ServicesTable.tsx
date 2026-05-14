import { Table } from '@common/ui-kit';
import {
  EmptyBox,
  useNumberFormat,
  useResponsiveColumns,
  useTranslate,
} from '@shared';

import { getServiceColumns } from './modal/ServiceColumns';

import type { ServiceType } from '../../../../types';

type ServicesTableProps = { services: ServiceType[] };

export const ServicesTable = ({ services }: ServicesTableProps) => {
  const { translate, locale } = useTranslate();
  const format = useNumberFormat();

  const columns = useResponsiveColumns(
    getServiceColumns(translate, locale, format),
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
};
