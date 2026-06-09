import { httpClient } from '@common/data-access';

import type {
  CategoryApiClientType,
  CategoryResponseType,
} from './requestTypes';

const getCategories = async () => {
  const { data } = await httpClient.request<CategoryResponseType[]>({
    url: `/categories`,
    method: 'GET',
  });

  return data;
};

export const categoryApiClient: CategoryApiClientType = {
  getCategories,
};
