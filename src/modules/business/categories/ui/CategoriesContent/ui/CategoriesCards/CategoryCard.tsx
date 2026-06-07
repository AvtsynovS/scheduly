import { Card, ColorPicker, Flex, Grid, Tag, Typography } from '@common/ui-kit';
import { ActionsButton, spaces, TagIcon, useTranslate } from '@shared';

import { createCategoryActions } from '../CategoriesTable/createCategoryActions';

import styled from 'styled-components';

import type { CategoryType } from '../../../../model/types';
import type { CategoryActionType } from '../../../../types';

const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

type CategoryCardProps = {
  category: CategoryType;
  onAction: (action: CategoryActionType) => void;
};

const StyledCard = styled(Card)<{ $color: string }>`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  height: 210px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: 8px;
    background-color: ${({ $color }) => $color};

    z-index: 1;
  }

  .ant-card-head {
    padding: ${({ theme }) => `${theme.spaces.xs} ${theme.spaces.s} 0`};
  }

  .ant-card-body {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
`;

const StyledContent = styled(Flex)`
  height: 100%;
  min-height: 0;
`;

const StyledTitle = styled(Title)`
  && {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledDescriptionWrapper = styled(Flex)`
  flex: 1;
  min-height: 0;
`;

const StyledLabel = styled(Text)`
  white-space: nowrap;
`;

const StyledDescription = styled(Text)`
  display: block;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;

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

export const CategoryCard = ({ category, onAction }: CategoryCardProps) => {
  const { translate } = useTranslate();
  const screen = useBreakpoint();

  const { id, name, color, description, totalServices } = category;

  const isXs = screen.xs ?? false;

  return (
    <StyledCard
      $color={color}
      title={
        <Flex gap={spaces.xxs} align="center">
          <ColorPicker value={color} size="small" disabled />
          <StyledTitle level={5}>{name}</StyledTitle>
        </Flex>
      }
      extra={
        <ActionsButton
          items={createCategoryActions({ id, name, onAction, translate })}
        />
      }
      size={isXs ? 'small' : 'medium'}
      hoverable
    >
      <StyledContent vertical gap={spaces.s}>
        <StyledDescriptionWrapper gap={spaces.s}>
          <StyledLabel type="secondary" strong>
            {translate('business.card.text.description')}
          </StyledLabel>
          <StyledDescription type="secondary">
            {description
              ? description
              : translate('business.card.text.emptyDescription')}
          </StyledDescription>
        </StyledDescriptionWrapper>
        <Flex gap={spaces.s} align="center">
          <StyledLabel type="secondary" strong>
            {translate('business.card.text.totalService')}
          </StyledLabel>
          <StyledTag icon={<TagIcon />}>{totalServices}</StyledTag>
        </Flex>
      </StyledContent>
    </StyledCard>
  );
};
