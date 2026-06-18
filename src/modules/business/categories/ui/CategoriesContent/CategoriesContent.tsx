import { useState } from 'react';

import { Flex, Segmented } from '@common/ui-kit';
import { spaces, Spin, useTranslateOptions } from '@shared';

import { CategoriesCards } from './ui/CategoriesCards/CategoriesCards';
import { CategoriesTable } from './ui/CategoriesTable/CategoriesTable';
import { categoriesTabs } from './categoriesTabs';

import styled from 'styled-components';

import type { CategoryType } from '../../model/types';
import type { CategoryActionType, ViewModeType } from '../../types';

type CategoriesContentProps = {
  categories: CategoryType[];
  isLoading: boolean;
  onAction: (action: CategoryActionType) => void;
};

// TODO (savtsynov) возможно стоит сделать стилизованные сегменты в будущем
const StyledSegmented = styled(Segmented<ViewModeType>)`
  width: fit-content;

  svg {
    vertical-align: middle;
  }
`;

export const CategoriesContent = ({
  categories,
  isLoading,
  onAction,
}: CategoriesContentProps) => {
  const [viewMode, setViewMode] = useState<ViewModeType>('table');

  const options = useTranslateOptions(categoriesTabs);

  const handleChangeView = (view: ViewModeType) => setViewMode(view);

  if (isLoading) return <Spin />;

  return (
    <Flex vertical gap={spaces.m}>
      <StyledSegmented
        options={options}
        value={viewMode}
        onChange={handleChangeView}
      />
      {viewMode === 'table' ? (
        <CategoriesTable categories={categories} onAction={onAction} />
      ) : (
        <CategoriesCards categories={categories} onAction={onAction} />
      )}
    </Flex>
  );
};
