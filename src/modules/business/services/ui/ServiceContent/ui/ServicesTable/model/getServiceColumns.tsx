import { Avatar, Button, Flex, Space, Tag, Typography } from '@common/ui-kit';
import { ClipboardListIcon, MEDIA, MoreIcon, spaces } from '@shared';

import styled from 'styled-components';

import type { ServiceType } from '../../../../../model/types';
import type { NumberFormatConfigType, ResponsiveColumnsType } from '@shared';

const { Text, Link } = Typography;

type ServiceColumnsType = ServiceType;

const StyledTagsWrapper = styled(Flex)`
  ${MEDIA.between('xl', 'xxl')} {
    max-width: 300px;
  }
`;

// TODO (savtsynov) Прокинуть actions для столбца actions
export const getServiceColumns = (
  translate: (key: string) => string,
  locale: string,
  format: (value: number, config?: NumberFormatConfigType) => string,
) =>
  [
    {
      key: 'mobile',
      title: translate('business.table.column.services'),
      hideAfter: 'md',
      render: (_, { name, categories, duration, price }) => (
        <Flex vertical gap={spaces.xs}>
          <Flex align="center" justify="space-between" gap={spaces.s}>
            <Flex align="center" gap={spaces.s}>
              <Avatar
                shape="circle"
                // src={src}
                icon={<ClipboardListIcon />}
              />
              <Link>{name}</Link>
            </Flex>
            <Button type="text" icon={<MoreIcon />} />
          </Flex>
          <Text type="secondary">
            {`${translate('business.table.column.duration')}: ${format(duration, { type: 'duration' })}`}
          </Text>
          <Space orientation="vertical" size="middle">
            <Text type="secondary" strong>
              {`${translate('business.table.column.price')}: ${format(
                price.amount,
                {
                  type: 'currency',
                  currency: price.currency,
                },
              )}`}
            </Text>
            <Flex gap={spaces.xxs} wrap>
              {categories.map((category) => (
                <Tag key={category.id} closable={false} color={category.color}>
                  {translate(`business.text.category.${category.name}`)}
                </Tag>
              ))}
            </Flex>
          </Space>
        </Flex>
      ),
    },
    {
      key: 'laptop',
      title: translate('business.table.column.services'),
      only: ['lg'],
      render: (_, { name, categories, duration }) => (
        <Flex vertical gap={spaces.xs}>
          <Flex align="center" gap={spaces.s}>
            <Avatar
              shape="circle"
              // src={src}
              icon={<ClipboardListIcon />}
            />
            <Link>{name}</Link>
          </Flex>
          <Space orientation="vertical" size="middle">
            <Text type="secondary">
              {`${translate('business.table.column.duration')}: ${format(duration, { type: 'duration' })}`}
            </Text>
            <Flex gap={spaces.xxs} wrap>
              {categories.map((category) => (
                <Tag key={category.id} closable={false} color={category.color}>
                  {translate(`business.text.category.${category.name}`)}
                </Tag>
              ))}
            </Flex>
          </Space>
        </Flex>
      ),
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: translate('business.table.column.services'),
      sorter: (a, b) => a.name.localeCompare(b.name, locale),
      showSorterTooltip: false,
      hideBefore: 'xl',
      render: (name) => (
        <Flex align="center" gap={spaces.s}>
          <Avatar
            shape="circle"
            // src={src}
            icon={<ClipboardListIcon />}
          />
          <Link>{name}</Link>
        </Flex>
      ),
    },
    {
      key: 'categories',
      dataIndex: 'categories',
      title: translate('business.table.column.categories'),

      hideBefore: 'xl',
      render: (_, { categories }) => (
        <StyledTagsWrapper gap={spaces.xs} wrap>
          {categories.map((category) => (
            <Tag key={category.id} closable={false} color={category.color}>
              {translate(`business.text.category.${category.name}`)}
            </Tag>
          ))}
        </StyledTagsWrapper>
      ),
    },
    {
      key: 'duration',
      dataIndex: 'duration',
      title: translate('business.table.column.duration'),
      sorter: (a, b) => a.duration - b.duration,
      showSorterTooltip: false,
      hideBefore: 'xl',
      render: (_, { duration }) => (
        <Text>{format(duration, { type: 'duration' })}</Text>
      ),
    },
    {
      key: 'price',
      dataIndex: 'price',
      minWidth: 110,
      title: translate('business.table.column.price'),
      sorter: (a, b) => a.price.amount - b.price.amount,
      showSorterTooltip: false,
      hideBefore: 'lg',
      render: (_, { price }) => (
        <Text>
          {format(price.amount, {
            type: 'currency',
            currency: price.currency,
          })}
        </Text>
      ),
    },
    {
      width: 68,
      hideBefore: 'lg',
      render: () => <Button type="text" icon={<MoreIcon />} />,
    },
  ] satisfies ResponsiveColumnsType<ServiceColumnsType>;
