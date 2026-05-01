import { Flex, Typography } from '@common/ui-kit';
import { spaces } from '@shared';

import type { ReactNode } from 'react';

const { Title, Text } = Typography;

type PageHeaderProps = {
  title: string | ReactNode;
  description: string | ReactNode;
  actions: ReactNode;
};

export const PageHeader = ({
  title,
  description,
  actions,
}: PageHeaderProps) => {
  return (
    <Flex align="center" justify="space-between" gap={spaces.l}>
      <Flex vertical>
        <Title level={2}>{title}</Title>
        <Text type="secondary">{description}</Text>
      </Flex>
      <Flex>{actions}</Flex>
    </Flex>
  );
};
