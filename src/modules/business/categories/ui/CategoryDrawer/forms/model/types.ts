import type { CategoryType } from '../../../../model/types';

export type CategoryValueType = Omit<CategoryType, 'id' | 'totalServices'>;
