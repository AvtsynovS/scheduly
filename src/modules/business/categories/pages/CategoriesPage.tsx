import { useCallback, useEffect, useMemo, useState } from 'react';

import { Button, Flex } from '@common/ui-kit';
import {
  MEDIA,
  PageHeader,
  PlusIcon,
  Search,
  spaces,
  Spin,
  useDebounce,
  useNotification,
  useTranslate,
} from '@shared';

import { useCategories } from '../model/queries/useCategories';
import { CategoriesContent, CategoryDrawer, CategoryModal } from '../ui';

import styled from 'styled-components';

import type { CategoryActionType, ConfirmActionType, ModeType } from '../types';

const StyledWrapper = styled(Flex)`
  padding: ${({ theme }) => theme.spaces.m};

  ${MEDIA.up('xl')} {
    padding: ${({ theme }) => theme.spaces.xxl};
  }
`;

const StyledButton = styled(Button)`
  ${MEDIA.down('md')} {
    span:not(.ant-btn-icon) {
      display: none;
    }
  }
`;

export const CategoriesPage = () => {
  const { translate } = useTranslate();
  const { showNotification } = useNotification();

  const { categories, isCategoriesLoading, isCategoriesError } =
    useCategories();

  const [drawerMode, setDrawerMode] = useState<ModeType>(null);
  const [confirmAction, setConfirmAction] = useState<ConfirmActionType>(null);
  const [search, setSearch] = useState('');

  // TODO (savtsynov) запрос на бэк с учетом поиска
  const debounce = useDebounce((value: string) => setSearch(value), 500);

  const filteredCategories = useMemo(() => {
    const list = categories ?? [];

    return list.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [categories, search]);

  const handleSearch = (value: string) => debounce(value);

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => debounce(event.target.value);

  const onCategoryActions = useCallback((action: CategoryActionType) => {
    switch (action.type) {
      case 'create':
        setDrawerMode({ type: 'create' });
        break;
      case 'edit':
        setDrawerMode({ type: 'edit', id: action.id });
        break;
      case 'delete':
        setConfirmAction({ type: 'delete', id: action.id, name: action.name });
        break;
      default:
        break;
    }
  }, []);

  const onCloseDrawer = () => setDrawerMode(null);
  const onCloseModal = () => setConfirmAction(null);

  useEffect(() => {
    if (isCategoriesError) {
      showNotification({
        type: 'error',
        title: translate('business.category.error.query.categories.title'),
        description: translate(
          'business.category.error.query.categories.description',
        ),
      });
    }
  }, [isCategoriesError, showNotification, translate]);

  if (isCategoriesLoading) return <Spin />;

  return (
    <StyledWrapper vertical gap={spaces.xl}>
      <PageHeader
        title={translate('business.page.title.categories')}
        description={translate('business.page.description.categories')}
        actions={
          <StyledButton
            icon={<PlusIcon />}
            type="primary"
            onClick={() => onCategoryActions({ type: 'create' })}
          >
            {translate('business.button.label.add.category')}
          </StyledButton>
        }
      />
      <Search
        placeholder={translate('business.select.placeholder.search')}
        allowClear
        // TODO пока идет запрос
        disabled={false}
        loading={false}
        onSearch={handleSearch}
        onChange={handleSearchChange}
      />
      <CategoriesContent
        categories={filteredCategories}
        onAction={onCategoryActions}
      />
      <CategoryDrawer mode={drawerMode} onClose={onCloseDrawer} />
      <CategoryModal mode={confirmAction} onClose={onCloseModal} />
    </StyledWrapper>
  );
};
