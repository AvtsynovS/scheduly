import { httpClient } from '@common/data-access';

import type {
  CategoryApiClientType,
  CategoryRequestType,
  CategoryResponseType,
  UpdateCategoryRequestType,
} from './requestTypes';

const getCategories = async () => {
  const { data } = await httpClient.request<CategoryResponseType[]>({
    url: `/categories`,
    method: 'GET',
  });

  return data;
};

const getCategoryById = async (id: string) => {
  const { data } = await httpClient.request<CategoryResponseType>({
    url: `/categories/${id}`,
    method: 'GET',
  });

  return data;
};

const createCategory = async (category: CategoryRequestType) => {
  const { data } = await httpClient.request<CategoryResponseType>({
    url: `/categories`,
    method: 'POST',
    data: category,
  });

  return data;
};

const updateCategory = async ({ id, category }: UpdateCategoryRequestType) => {
  const { data } = await httpClient.request<CategoryResponseType>({
    url: `/categories/${id}`,
    method: 'PATCH',
    data: category,
  });

  return data;
};

const deleteCategory = async (id: string) => {
  const { data } = await httpClient.request<void>({
    url: `/categories/${id}`,
    method: 'DELETE',
  });

  return data;
};

export const categoryApiClient: CategoryApiClientType = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
