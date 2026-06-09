import type { CategoryType } from '../model/types';

export type CategoryResponseType = CategoryType;

export type CategoryApiClientType = {
  getCategories: () => Promise<CategoryResponseType[]>;
};
