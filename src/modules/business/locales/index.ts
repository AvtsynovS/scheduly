import {
  business_categories_en,
  business_categories_ru,
} from '@modules/categories';

import business_common_en from './business_en.json';
import business_common_ru from './business_ru.json';

export { business_common_ru, business_common_en };
export {
  business_categories_ru,
  business_categories_en,
} from '@modules/categories';

export const business_ru = {
  ...business_common_ru,
  ...business_categories_ru,
};

export const business_en = {
  ...business_common_en,
  ...business_categories_en,
};
