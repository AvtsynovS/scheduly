import styled from 'styled-components';

import type { CategoryType } from '../../../../model/types';
import type { CategoryActionType } from '../../../../types';

type CategoriesCardsProps = {
  categories: CategoryType[];
  onAction: (action: CategoryActionType) => void;
};

const StyledWrapper = styled.div`
  display: flex;
`;

export const CategoriesCards = ({
  categories,
  onAction,
}: CategoriesCardsProps) => {
  return <StyledWrapper>CategoriesCards</StyledWrapper>;
};
