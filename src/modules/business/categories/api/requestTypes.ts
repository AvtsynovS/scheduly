import type { CategoryType } from '../model/types';

export type CategoryResponseType = CategoryType;
export type CreateCategoryResponseType = CategoryType;

export type CategoryRequestType = Omit<CategoryType, 'id' | 'totalServices'>;
export type UpdateCategoryRequestType = {
  id: string;
  category: Omit<CategoryType, 'id' | 'totalServices'>;
};

export type CategoryApiClientType = {
  getCategories: () => Promise<CategoryResponseType[]>;
  getCategoryById: (id: string) => Promise<CategoryResponseType>;
  createCategory: (
    category: CategoryRequestType,
  ) => Promise<CategoryResponseType>;
  updateCategory: (params: UpdateCategoryRequestType) => Promise<CategoryType>;
  deleteCategory: (id: string) => Promise<void>;
};
