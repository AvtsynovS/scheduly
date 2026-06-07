import { memo } from 'react';

import { Table } from '@common/ui-kit';
import { EmptyBox, useResponsiveColumns, useTranslate } from '@shared';

import { getCategoryColumns } from './getCategoryColumns';

import type { CategoryType } from '../../../../model/types';
import type { CategoryActionType } from '../../../../types';

type CategoriesTableProps = {
  categories: CategoryType[];
  onAction: (action: CategoryActionType) => void;
};

export const CategoriesTable = memo(
  ({ categories, onAction }: CategoriesTableProps) => {
    const { translate } = useTranslate();

    const columns = useResponsiveColumns(
      getCategoryColumns(translate, onAction),
    );

    return (
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={categories || []}
        locale={{
          emptyText: (
            <EmptyBox description={translate('table.description.empty')} />
          ),
        }}
      />
    );
  },
);

CategoriesTable.displayName = 'CategoriesTable';
