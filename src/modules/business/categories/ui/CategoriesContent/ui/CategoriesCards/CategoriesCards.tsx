import { Col, Row } from '@common/ui-kit';

import { CategoryCard } from './CategoryCard';

import type { CategoryType } from '../../../../model/types';
import type { CategoryActionType } from '../../../../types';

type CategoriesCardsProps = {
  categories: CategoryType[];
  onAction: (action: CategoryActionType) => void;
};

export const CategoriesCards = ({
  categories,
  onAction,
}: CategoriesCardsProps) => {
  return (
    <Row gutter={[16, 8]}>
      {categories.map((category) => (
        <Col key={category.id} xs={24} md={12}>
          <CategoryCard category={category} onAction={onAction} />
        </Col>
      ))}
    </Row>
  );
};
