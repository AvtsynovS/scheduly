import { ColorPicker, Divider, Flex, Tag, Typography } from '@common/ui-kit';
import { ActionsButton, spaces, TagIcon } from '@shared';

import { createCategoryActions } from './createCategoryActions';

import styled from 'styled-components';

import type { CategoryType } from '../../../../model/types';
import type { CategoryActionType } from '../../../../types';
import type { ResponsiveColumnsType } from '@shared';

const { Text } = Typography;

type CategoryColumnType = CategoryType;

// TODO (сделать кастомный компонент Tag?)
const StyledTag = styled(Tag)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xxs};
  width: fit-content;

  svg {
    width: 12px;
    height: 12px;
  }
`;

const StyledLabel = styled(Text)`
  white-space: nowrap;
`;

export const getCategoryColumns = (
  translate: (key: string) => string,
  onAction: (action: CategoryActionType) => void,
) =>
  [
    {
      key: 'mobile',
      title: translate('business.table.column.categories'),
      minWidth: 160,
      hideAfter: 'sm',
      render: (_, { id, name, color, description, totalServices }) => (
        <Flex vertical>
          <Flex gap={spaces.xxs} align="center" justify="space-between">
            <Flex gap={spaces.xxs} align="center">
              <ColorPicker value={color} size="small" disabled />
              <Text strong>{name}</Text>
            </Flex>
            <ActionsButton
              items={createCategoryActions({ id, name, onAction, translate })}
            />
          </Flex>
          <Divider size="small" />
          <Flex vertical gap={spaces.s}>
            <Flex gap={spaces.s}>
              <StyledLabel>
                {translate('business.table.text.description')}
              </StyledLabel>
              <Text type="secondary">
                {description
                  ? description
                  : translate('business.card.text.emptyDescription')}
              </Text>
            </Flex>
            <Flex gap={spaces.s} align="center">
              <StyledLabel>
                {translate('business.table.text.totalService')}
              </StyledLabel>
              <StyledTag icon={<TagIcon />}>{totalServices}</StyledTag>
            </Flex>
          </Flex>
        </Flex>
      ),
    },
    {
      key: 'tablet',
      title: translate('business.table.column.categories'),
      only: ['md'],
      minWidth: 160,
      render: (_, { name, color, totalServices }) => (
        <Flex vertical>
          <Flex gap={spaces.s} align="center">
            <ColorPicker value={color} size="small" disabled />
            <Text strong>{name}</Text>
          </Flex>
          <Divider size="small" />
          <Flex gap={spaces.s} align="center">
            <StyledLabel>
              {translate('business.table.text.totalService')}
            </StyledLabel>
            <StyledTag icon={<TagIcon />}>{totalServices}</StyledTag>
          </Flex>
        </Flex>
      ),
    },
    {
      key: 'color',
      dataIndex: 'color',
      title: translate('business.table.column.color'),
      width: 60,
      hideBefore: 'lg',
      render: (_, { color }) => (
        <ColorPicker value={color} size="large" disabled />
      ),
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: translate('business.table.column.name'),
      minWidth: 160,
      hideBefore: 'lg',
      render: (_, { name }) => <Text strong>{name}</Text>,
    },
    {
      key: 'description',
      dataIndex: 'description',
      title: translate('business.table.column.description'),
      minWidth: 200,
      hideBefore: 'md',
      render: (_, { description }) => (
        <Text type="secondary">
          {description
            ? description
            : translate('business.card.text.emptyDescription')}
        </Text>
      ),
    },
    {
      key: 'totalService',
      dataIndex: 'totalService',
      title: translate('business.table.column.totalService'),
      hideBefore: 'lg',
      render: (_, { totalServices }) => {
        return <StyledTag icon={<TagIcon />}>{totalServices}</StyledTag>;
      },
    },
    {
      width: 68,
      hideBefore: 'md',
      render: (_, { id, name }) => (
        <ActionsButton
          items={createCategoryActions({ id, name, onAction, translate })}
        />
      ),
    },
  ] satisfies ResponsiveColumnsType<CategoryColumnType>;
